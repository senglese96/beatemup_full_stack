class Api::GroupsController < ApplicationController
    def create
        if group_params["photo"] == 'null'
            file = File.open('public/beatemup_logo.png')
            params[:group][:photo] = file;
        end
        @group = Group.new(group_params)
        if !@group.photo.attached?
            @group.photo.attach(io: file, filename: 'beatemup_logo.png')
        end
        if @group.organizer_id == nil
            @group.organizer_id = current_user.id
        end
        
        if @group.save
            Membership.create!(member_id: current_user.id, group_id: @group.id)
            redirect_to api_group_url(@group.id)
        else
            render json: @group.errors.full_messages, status: 422
        end
    end

    def show
        @group = Group.find_by(id: params[:id])
        @members = @group.members == nil ? [] : @group.members
        @memberships = @group.memberships == nil ? [] : @group.memberships
        @events = @group.events == nil ? [] : @group.events
        if @group
            render "api/groups/show"
        else
            render json: 'Group Not Found', status: 404
        end
    end

    def update
        @group = Group.find_by(id: params[:id].to_i)
        if @group.update(group_params)
            redirect_to api_group_url(@group.id)
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
