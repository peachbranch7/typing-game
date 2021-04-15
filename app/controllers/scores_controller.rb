class ScoresController < ApplicationController
  def index
    @score = Score.all.order(id: "DESC")
  end

  def new
    @score = Score.new
    @words = Word.all
    @word = []
    @words.each do |word|
      @word << {id: word.id, name: word.name}
      # @word_id = Word.find(params[word_id: word.id])
    end
    gon.word = @word
    @count = gon.count
  end
  
  def create
    @score = Score.new(score_params)
    if @score.save
      redirect_to root_path
    else
      render :new
    end
  end
  
  private
  def score_params
    params.require(:score).permit(:point).merge(user_id: current_user.id)
  end
end
