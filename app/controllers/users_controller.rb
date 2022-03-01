class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
  before_action :authorize_request, except: [:create, :get_all_products, :delete_product]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

 

  def add_product
    @single_user = User.find(params[:id])
    p @single_user, "hello"
    @new_product = Product.find(params[:product_id])
    @single_user.products << @new_product
    render json: @single_user.products.all
  end

  def delete_product
    @single_user1 = User.find(params[:id])
    @single_product = Product.find(params[:product_id])
    index = @single_product.id
    @array = @single_user1.products.find_all{|i| i.id == index}
    @array.pop
    @single_user1.products.delete(params[:product_id])
    @single_user1.products << @array
    render json: @single_user1.products
  end

   def get_all_products
     @single_user2 = User.find(params[:id])
     @all_products = @single_user2.products.all
     render json: @all_products
  end

  def remove_all
    @single_user3 = User.find(params[:id])
    @single_user3.products.destroy_all
  end

  # POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :is_admin, :is_customer)
    end
end
