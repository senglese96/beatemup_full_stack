class Api::AttendancesController < ApplicationController
    def create
        @attendance = Attendance.new(event_id: params[:eventId], attendee_id: current_user.id)
        @attendance.save
    end

    def destroy
        
    end
end
