class Api::GroupsController < ApplicationController
    def create
        @group = Group.new(group_params)
        if @group.save
            Membership.create!(group_id: @group.id, member_id: current_user.id)
            redirect_to api_group_url(@group.id)
        else
            render json: @group.errors.full_messages
        end
    end

    def show
        @group = Group.find_by(id: params[:id])
        @members = @group.members == nil ? [] : @group.members
        @memberships = @group.memberships == nil ? [] : @group.memberships
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
        underscore_params!(params.require(:group).permit(:name, :category, :location, :description))
    end
end
