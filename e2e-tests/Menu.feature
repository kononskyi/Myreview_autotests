Feature: Basic menu movements
#test LVEP-228,LVEP-233,LVEP-174,LVEP-158,LVEP-175
  @test22
  Scenario Outline: "Notes" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on Notes item
    Then Notes page is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |

  @test23
  Scenario Outline: "Form" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on Form item
    Then Form page is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |

  @test24
  Scenario Outline: "Department" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on Department item
    Then Department page is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptesterdm  |
      | epsm        |
      | epdelivery1 |

  @test25
  Scenario Outline: "History" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on History item
    Then History page is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |

  @test26
  Scenario Outline: "Tools" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on Tools item
    Then Tools page is opened for "<username>"

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptesterdm  |
      | epsm        |
      | epdelivery1 |

  @test27
  Scenario Outline: "Drop down menu" opening
    Given User "<username>" is logged successfully
    When User "<username>" click on user icon
    Then Drop down menu is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |

  @test28
  Scenario Outline: "Form example" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on user icon
    And click on Form Example item
    Then Form example page is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |

  @test29
  Scenario Outline: "About MyReview" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on user icon
    And click on About MyReview item
    Then About MyReview page is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |

  @test30
  Scenario Outline: "Send your feedback" dialog window opening
    Given User "<username>" is logged successfully
    When User "<username>" click on user icon
    And click on Send your feedback item
    Then Send your feedback dialog window is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |


  @test31
  Scenario Outline: "Basic" page opening
    Given User "<username>" is logged successfully
    When User "<username>" click on menu items and Levi9Logo step by step
    Then "Basic" page is opened

    Examples:
      | username    |
      | ephr        |
      | ephrdm      |
      | eptester1   |
      | eptesterdm  |
      | epdelivery1 |
      | epsm        |





