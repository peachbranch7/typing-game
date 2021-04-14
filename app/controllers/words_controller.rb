class WordsController < ApplicationController
  def new
  end

  def create
  end

  def word_params
    params.require(:word).permit(:word, :description).merge(user_id: current_user.id)
  end
end
