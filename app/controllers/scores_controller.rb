class ScoresController < ApplicationController
  def index
  end

  def new
    @word = Word.all
  end







end
