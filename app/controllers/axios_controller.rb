class AxiosController < ApplicationController

  def basic
  end
  def skills
    respond_to do |format|
      format.any { render json: ['laravel', 'vue', 'php'], content_type: 'application/json' }
    end
  end
end
