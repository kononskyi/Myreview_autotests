Feature: LogOut from MyReview

  #test LVEP-50
  @test21
  Scenario Outline: Log out from the Myreview account
    Given User "<username>" is logged successfully
    When User click on drop-down button and choose logout item
    Then User is logged out

    Examples:
      | username   |
      | eptester1  |
      | ephr       |
      | eptesterdm |
      | epsm       |

