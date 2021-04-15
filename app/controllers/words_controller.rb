class WordsController < ApplicationController
  before_action :move_to_index, only: [:new, :create]

  def new
    @word = Word.new
  end

  def create
    @word = Word.new(word_params)
    # binding.pry
    if @word.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def word_params
    params.require(:word).permit(:name, :description).merge(user_id: current_user.id)
  end

  def move_to_index
    unless user_signed_in?
      redirect_to root_path
    end
  end
end
