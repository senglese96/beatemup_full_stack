class Api::EventsController < ApplicationController

    def create
        @event = Event.new(event_params)
        if @event.host_id === nil
            @event.host_id = current_user.id
        end
        if @event.save
            redirect_to api_event_url(@event.id)
        else
            render json: @event.errors.full_messages
        end
    end

    def show
        @event = Event.find_by(id: params[:id])
        @attendances = @event.attendances == nil ? [] : @event.attendances 
        @users = @event.attendees == nil ? [] : @event.attendees 
        @group = @event.group
        @host = @event.host
        if @eddvent
            render "api/events/show"
        else
            render json: 'No Event Here', status: 404
        end
    end

    def index
        @events = Event.all
        render 'api/events/index'
    end

    def update
        @event = Event.find_by(id: params[:id])
        if @event.update(event_params)
            @attendances = @event.attendances == nil ? [] : @event.attendances 
            @users = @event.attendees == nil ? [] : @event.attendees 
            @group = @event.group
            @host = @event.host
            render "api/events/show"
        else
            render json: 'Event Not Found', status: 404
        end
    end

    def destroy
         @event = Event.find_by(id: params[:id])
        if @event
            @event.destroy

            render 'api/events/show'
        else
            render json: 'Event Not Found', status: 404
        end
    end

    private

    def event_params
        underscore_params!(params.require(:event).permit(:hostId, :groupId, :details, :title, :category, :date, :eventAddress))
    end
end
