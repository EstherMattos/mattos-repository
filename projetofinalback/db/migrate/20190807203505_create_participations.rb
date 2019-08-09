class CreateParticipations < ActiveRecord::Migration[5.2]
  def change
    create_table :participations do |t|
      t.references :users, foreign_key: true
      t.references :selective_processes, foreign_key: true

      t.timestamps
    end
  end
end
