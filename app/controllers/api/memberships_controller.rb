class Api::MembershipsController < ApplicationController
    def create
        @membership = Membership.new(group_id: params[:group_id], member_id: current_user.id)
        @membership.save
    end

    def destroy
        @membership = Membership.where('group_id = ? and member_id = ?', params[:id], current_user.id)
        @membership.destroy
    end
end
