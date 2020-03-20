require 'test_helper'

class ApplicationHelperTest < ActionView::TestCase
  test "full title helper" do
    assert_equal full_title, "Pomodoro Worker"
    assert_equal full_title("Help"), "Help | Pomodoro Worker"
  end
end
