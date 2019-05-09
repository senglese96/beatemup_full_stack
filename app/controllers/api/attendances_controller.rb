class Api::AttendancesController < ApplicationController
    def create
        @attendance = Attendance.new(event_id: params[:event_id], attendee_id: current_user.id)
        if @attendance.save
            render 'api/attendance'
        end
    end

    def destroy
        
    end
end
