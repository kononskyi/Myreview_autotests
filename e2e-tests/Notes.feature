Feature: Objective creation and adding

  @test32
  Scenario: Create a new objective
    Given User "eptester" is logged successfully
    When User click on Add objective button
    And Go to Notes item, enter "TittleTittleTittle" in title and "CommentCommentComment" in comment field
    And Click on Save button
    Then New objective is created