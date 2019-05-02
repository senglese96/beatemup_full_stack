class Api::EventsController < ApplicationController

    def create
        @event = Event.new(event_params)
        if @event.save
            render 'api/events/event'
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
        if params.include?(:constraints)
            @events = Event.where(params[:constraints])
            render 'api/events/index'
        else
            @events = Event.all
            render 'api/events/index'
        end
    end

    def update
        
    end

    def destroy

    end

    private

    def event_params
        underscore_params!(params.require(:event).permit(:hostId, :groupId, :details, :title, :category, :date, :eventAddress))
    end
end
