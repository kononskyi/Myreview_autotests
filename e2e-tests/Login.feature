Feature: Login to Myreview

  #test LVEP-3
  @test1
  Scenario Outline: Login as valid user (with valid username and password)
    Given Login page is opened
    When  User type "<username>" into username field
    And User type "Levi9Pro" into password field
    And Click on login button
    Then User - "<username>" should be logged into the system

    Examples:
      | username   |
      | eptester1  |
      | ephr       |
      | eptesterdm |
      | epsm       |


  #test LVEP-5
  @test2
  Scenario: Login as unregistered user
    Given Login page is opened
    When  User type "!!!!!!!!_23" into username field
    And User type "Levi9" into password field
    And Click on login button
    Then User shouldn't be logged into the system

  #test LVEP-7
  @test3
  Scenario: Login with password "Username" field
    Given Login page is opened
    When  User type "eptesterdm" into username field
    And Leave password field empty
    And Click on login button
    Then User shouldn't be logged into the system with no error

  #test LVEP-7
  @test4
  Scenario: Login with empty "Username" field
    Given Login page is opened
    When  User type "eptesterdm" into username field
    And Leave username field empty
    And Click on login button
    Then User shouldn't be logged into the system with no error

  #test LVEP-131
  @test5
  Scenario Outline: Login with invalid password or login
    Given Login page is opened
    When  User type "<username>" into username field
    And User type "<password>" into password field
    And Click on login button
    Then User shouldn't be logged into the system

    Examples:
      | username  | password   |
      | eptester1 | 12345466   |
      | testtest  | Levi9Pro   |
      | ephr      | hrhrhrhrhr |
      | Hello     | Levi9Pro   |

  #test LVEP-131
  @test6
  Scenario Outline: Login with spaces in the middle of login and password
    Given Login page is opened
    When  User type "<username>" into username field
    And User type "<password>" into password field
    And Click on login button
    Then User shouldn't be logged into the system

    Examples:
      | username   | password  |
      | epte ster1 | Levi9Pro  |
      | eptester1  | Levi 9Pro |

  #test LVEP-131
  @test7
  Scenario: Login with spaces at the end of password
    Given Login page is opened
    When  User type "eptesterdm" into username field
    And User type "Levi9Pro " into password field
    And Click on login button
    Then User shouldn't be logged into the system

  #test LVEP-131
  @test8
  Scenario: Login with spaces at the beginning of password
    Given Login page is opened
    When  User type "eptesterdm" into username field
    And User type " Levi9Pro" into password field
    And Click on login button
    Then User shouldn't be logged into the system

  #test LVEP-131
  @test9
  Scenario: Login with password that consists only from spaces
    Given Login page is opened
    When  User type "eptesterdm" into username field
    And User type "         " into password field
    And Click on login button
    Then User shouldn't be logged into the system

  #test LVEP-131
  @test10
  Scenario: Login with username that consists only from spaces
    Given Login page is opened
    When  User type "        " into username field
    And User type "Levi9Pro" into password field
    And Click on login button
    Then User shouldn't be logged into the system

  #test LVEP-131
  @test11
  Scenario: Login with spaces at the beginning of username
    Given Login page is opened
    When  User type "   ephr" into username field
    And User type "Levi9Pro" into password field
    And Click on login button
    Then User - "ephr" should be logged into the system

  #test LVEP-131
  @test12
  Scenario: Login with spaces at the end of username
    Given Login page is opened
    When  User type "ephr         " into username field
    And User type "Levi9Pro" into password field
    And Click on login button
    Then User - "ephr" should be logged into the system

  #test LVEP-132
  @test13
  Scenario: Login with valid password and username in wrong fields
    Given Login page is opened
    When  User type "Levi9Pro" into username field
    And User type "eptester1" into password field
    And Click on login button
    Then User shouldn't be logged into the system

  #test LVEP-48
  @test14
  Scenario Outline: Login with valid password in upper and lower case
    Given Login page is opened
    When  User type "<username>" into username field
    And User type "<password>" into password field
    And Click on login button
    Then User shouldn't be logged into the system

    Examples:
      | username | password |
      | epsm     | LEVI9PRO |
      | epsm     | levi9pro |

  #test LVEP-130
  @test15
  Scenario Outline: Login with valid username in upper case
    Given Login page is opened
    When  User type "<username>" into username field
    And User type "Levi9Pro" into password field
    And Click on login button
    Then User - "<username>" should be logged into the system

    Examples:
      | username   |
      | EPTESTERDM |
      | EPHR       |
      | EPTESTERDM |
      | EPSM       |

  #test LVEP-14
  @test16
  Scenario: Input some values in password field and check view of values in password field
    Given Login page is opened
    When  User type "eptester1" into username field
    And User type "HelloHelloHello" into password field
    Then Password is displayed in bullets

  #test LVEP-22
  @test17
  Scenario: Login with max possible length(255 symbols) in username field and (64 symbols) in password field
    Given Login page is opened
    When User try to type 256 symbols into username field and 65 symbols into password field
    And Click on login button
    Then User shouldn't be logged into the system

  #test LVEP-15
  @test18
  Scenario: Copy text from password field
    Given Login page is opened
    When User type "HelloHelloHello" into password field
    And Copy symbols from password field and paste in username field
    Then No symbols in username field is displayed

  #test LVEP-140
  @test19
  Scenario Outline: Check Login with specific symbols
    Given Login page is opened
    When  User type "<username>" into username field
    And User type "<password>" into password field
    And Click on login button
    Then User shouldn't be logged into the system

    Examples:
      | username                                                     | password                                                     |
      | «♣»,«»‘~!@#$%^&*()?>,./\<][ /*<!—«», «${code}»;—>            | «♣»,«»‘~!@#$%^&*()?>,./\<][ /*<!—«», «${code}»;—>            |
      | <script>alert(1234567)</script>                              | <script>alert(1234567)</script>                              |
      | SELECT * FROM `user_forms` WHERE 1                           | SELECT * FROM `user_forms` WHERE 1                           |
      | Aa!@#$%^&*()-_+=`~/\,.?><b / PaSSword!@#$%^&*()-_+=`~/\,.?>< | Aa!@#$%^&*()-_+=`~/\,.?><b / PaSSword!@#$%^&*()-_+=`~/\,.?>< |

  #test LVEP-150
  @test20
  Scenario: Check Levi9Logo
    Given Login page is opened
    When  User type "<123123123>" into username field
    And User type "<12312313>" into password field
    And Click on login button
    And Click on Levi9 logo
    Then Page is refreshed
