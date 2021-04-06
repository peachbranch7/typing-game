class ScoresController < ApplicationController
  def index
  end

  def new
    @words = Word.all
    @name = []
    @words.each do |word|
      @name << word.name
    end
    gon.word = @name    
  end







end
