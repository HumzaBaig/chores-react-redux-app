# == Schema Information
#
# Table name: chores
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  done       :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chore < ActiveRecord::Base
  validates :title, :body, presence: true


end
