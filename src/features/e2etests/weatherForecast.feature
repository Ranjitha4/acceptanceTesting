Feature: To test the weather forecast application.

    Background:
        Given I open the site "/"

    Scenario Outline: Enter city name and to get 5 day weather forecast
      When I enter <city> name
      Then I verify five days weather is displayed

      Examples:
        |city|
        | edinburgh |
        | aberdeen  |
        | perth     |
        | dundee    |
        | stirling  |
        | glasgow   |

  Scenario Outline: Select day to get 3 hourly forecast
    When I enter <city> name
    And I verify five days weather is displayed
    Then I click on a <day> to check hourly forecast

    Examples:
      |city| day |
      | edinburgh |  5  |
      | aberdeen  |  1  |
      | dundee    |  3  |
      | perth     |  4  |
      | stirling  |  5  |
      | glasgow   |  2  |

  Scenario Outline: Select day again to hide 3 hourly forecast
    When I enter <city> name
    And I verify five days weather is displayed
    And I click on a <day> to check hourly forecast
    Then I click on a <day> to hide the wethere forecast

    Examples:
      |city| day |
      | edinburgh |  5  |
      | aberdeen  |  1  |
      | dundee    |  3  |
      | perth     |  4  |
      | stirling  |  5  |
      | glasgow   |  2  |

  Scenario Outline: Display Most dominant (or current) condition of specific day
    When I enter <city> name
    And I verify five days weather is displayed
    And I click on a <day> to check hourly forecast
    Then I display the current climate of selected <day>

    Examples:
      |city| day |
      | edinburgh |  5  |
      | aberdeen  |  1  |
      | dundee    |  3  |
      | perth     |  4  |
      | stirling  |  5  |
      | glasgow   |  2  |

  Scenario Outline: Display Most dominant (or current) wind speed and direction of specific day with the value rounded down
    When I enter <city> name
    And I verify five days weather is displayed
    And I click on a <day> to check hourly forecast
    And I display dominant wind speed of selected <day>

    Examples:
      |city| day |
      | edinburgh |  5  |
      | aberdeen  |  1  |
      | dundee    |  3  |
      | perth     |  4  |
      | stirling  |  5  |
      | glasgow   |  2  |

  Scenario Outline: Display Aggregate rainfall of specific day with the values rounded down
    When I enter <city> name
    And I verify five days weather is displayed
    And I click on a <day> to check hourly forecast
    Then I display the aggregate rainfall of selected <day>

    Examples:
      |city| day |
      | edinburgh |  5  |
      | aberdeen  |  1  |
      | dundee    |  3  |
      | perth     |  4  |
      | stirling  |  5  |
      | glasgow   |  2  |

  Scenario Outline: Display Minimum and maximum temperatures of specific day with the values rounded down
    When I enter <city> name
    And I verify five days weather is displayed
    And I click on a <day> to check hourly forecast
    Then I display min and max temperature of selected <day>

    Examples:
      |city| day |
      | edinburgh |  5  |
      | aberdeen  |  1  |
      | dundee    |  3  |
      | perth     |  4  |
      | stirling  |  5  |
      | glasgow   |  2  |


  Scenario Outline: Error scenarios
        When I enter <city> name
        Then I verify blank value for city display error <msg>

        Examples:
            |city|msg|
            | invalidcity |Error retrieving the forecast    |