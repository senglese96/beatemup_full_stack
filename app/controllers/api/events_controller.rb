class Api::EventsController < ApplicationController

    def create
        @event = Event.new(event_params)
        if @event.save
            render 'api/events/show'
        else
            render json: @event.errors.full_messages
        end
    end

    def show
        @event = Event.find_by(id: params[:id])
        if @event
            render "api/event/show"
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
            render 'api/events/show'
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
