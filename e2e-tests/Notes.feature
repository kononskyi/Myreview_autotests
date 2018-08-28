Feature: Objective creation and editing, deleting

  #LVEP-148,136
  @test32
  Scenario Outline: Create a new objective
    Given User "<login>" is logged successfully
    And Notes page is opened for user "<login>"
    When User click on Add objective button
    And Go to Notes item, enter "<title>" in title and "<comment>" in comment field
    And Click on Save button
    Then New objective is created with "<title>" and "<comment>"

    Examples:
      | title             | comment      | login     |
      | Tittle TitleTitle | Comment      | eptester1 |
      | 12zs@#qwert       | 1            | eptester1 |
      | 1234567890        | 1234567890   | eptester1 |
      | !@#$%^&*()_+      | +_)(*&^%$#@! | eptester1 |
      | Привет Пока       | Пока Привет  | eptester1 |
      | Ghbdtn Привет     |              | eptester1 |

  #LVEP-136,138
  @test33
  Scenario Outline: Create a new objective
    Given User "<login>" is logged successfully
    And Notes page is opened for user "<login>"
    When User click on Add objective button
    And Go to Notes item, enter "<sym1>" symbols in title and "<sym2>" symbols in comment field
    And Click on Save button
    Then New objective is created with 255 symbols in title and 2500 symbols in comment

    Examples:
      | sym1 | sym2 | login     |
      | 255  | 2500 | eptester1 |
      | 254  | 2499 | eptester1 |

  #LVEP-147,138
  @test34
  Scenario Outline: Create a new objective with invalid info in title field
    Given User "<login>" is logged successfully
    And Notes page is opened for user "<login>"
    When User click on Add objective button
    And Go to Notes item, enter "<title>" in title and " " in comment field
    Then New objective isn't created

    Examples:
      | title     | login     |
      | 1         | eptester1 |
      | qwertyuuc | eptester1 |
      |           | eptester1 |

      #LVEP-136
  @test35
  Scenario Outline: Create a new objective with invalid info in title field 2
    Given User "<login>" is logged successfully
    And Notes page is opened for user "<login>"
    When User click on Add objective button
    And Go to Notes item, enter "<sym1>" symbols in title and "<sym2>" symbols in comment field
    Then New objective isn't created with invalid info in title field

    Examples:
      | sym1 | sym2 | login     |
      | 256  |      | eptester1 |

    #LVEP-138
  @test36
  Scenario Outline: Create a new objective with invalid info in comment field
    Given User "<login>" is logged successfully
    And Notes page is opened for user "<login>"
    When User click on Add objective button
    And Go to Notes item, enter "<sym1>" symbols in title and "<sym2>" symbols in comment field
    Then New objective isn't created with invalid info in comment field

    Examples:
      | sym1 | sym2 | login     |
      | 10   | 2501 | eptester1 |

    #LVEP-147
  @test37
  Scenario: Close Objective dialog window by x
    Given User "eptester1" is logged successfully
    And Notes page is opened for user "eptester1"
    When User click on Add objective button
    And Click on x button
    Then Objective dialog window is disappeared

    #LVEP-147
  @test38
  Scenario: Close Objective dialog window by Cancel
    Given User "eptester1" is logged successfully
    And Notes page is opened for user "eptester1"
    When User click on Add objective button
    And Click on Cancel button
    Then Objective dialog window is disappeared

  @test39
  Scenario Outline: Create a new objective without info in deadline field
    Given User "<login>" is logged successfully
    And Notes page is opened for user "<login>"
    When User click on Add objective button
    And Go to Notes item, enter "HelloHelloHello" in title and "ByeByeByeBye" in comment field
    And Clear deadline field
    Then New objective isn't created with empty deadline field

    Examples:
      | login     |
      | eptester1 |


  @test40
  Scenario Outline: Create a new objective with invalid data in all fields
    Given User "<login>" is logged successfully
    And Notes page is opened for user "<login>"
    When User click on Add objective button
    And Go to Notes item, enter "<sym1>" symbols in title and "<sym2>" symbols in comment field
    And Clear deadline field
    Then New objective isn't created with invalid data in all fields

    Examples:
      | sym1 | sym2 | login     |
      | 9    | 2501 | eptester1 |

  #LVEP-93
  @test41
  Scenario: Delete last objective from the list
    Given User "eptester1" is logged successfully
    And Notes page is opened for user "eptester1"
    When User click on Delete button
    And Confirm deleting
    Then Last objective is deleted

    #LVEP-93
  @test42
  Scenario: Delete objective canceling
    Given User "eptester1" is logged successfully
    And Notes page is opened for user "eptester1"
    When User click on Delete button
    And Click on Cancel button on Delete objective dialog window
    Then Delete objective window disappeared
