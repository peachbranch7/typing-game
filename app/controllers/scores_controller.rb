class ScoresController < ApplicationController
  def index
  end

  def new
    gon.word = Word.find(1)
  end







end
