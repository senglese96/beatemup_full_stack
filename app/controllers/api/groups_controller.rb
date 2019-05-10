class Api::GroupsController < ApplicationController
    def create
        debugger
        @group = Group.new(group_params)
        if !@group.photo.attached?
            file = File.open('/public/beatemup_logo.png')
            @group.photo.attach(io: file, filename: 'beatemup_logo.png')
        end
        if @group.organizer_id == nil
            @group.organizer_id = current_user.id
        end
        if @group.save
            redirect_to api_group_url(@group.id)
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def show
        @group = Group.find_by(id: params[:id])
        @members = @group.members == nil ? [] : @group.members
        @memberships = @group.memberships == nil ? [] : @group.memberships
        @events = @group.events
        if @group
            render "api/groups/show"
        else
            render json: 'Group Not Found', status: 404
        end
    end

    def update
        @group = Group.find_by(id: params[:id])
        if @group.update(group_params)
            render 'api/groups/show'
        else
            render json: 'Group Not Found', status: 404
        end
    end

    def index
        @groups = Group.all
        render 'api/groups/index'
    end

    def destroy
        @group = Group.find_by(id: params[:id])
        if @group
            @group.destroy

            render 'api/groups/show'
        else
            render json: 'Group Not Found', status: 404
        end
    end

    private

    def group_params
        underscore_params!(params.require(:group).permit(:name, :category, :location, :description, :photo))
    end
end
