def getPerfectMatch( person ):

    availablePeople = getListOfPeople()  # Out of the scope of this kata

    for possibleMatch in availablePeople:
        genderOK = false
        ageOK = true
        hobbiesOK = false

        if ((person.gender == 'male' and possibleMatch.gender == 'female') or
            (person.gender == 'female' and possibleMatch.gender == 'male')):
            # This check is not intended to force anyone's sexuality.
            # Just an example for the kata.
            genderOK = true

        if ((possibleMatch.age < ((person.age - 7) * 2)) or
            (person.age < ((possibleMatch.age -7) * 2))):
            # Use the half-your-age-plus-seven rule to calculate if the age matches
            # http://www.urbandictionary.com/define.php?term=half-your-age-plus-seven
            ageOK = false

        commonHobbies = 0
        for hobby in match.hobbies:
            for myHobbies in person.hobbies:
                if (hobby == myHobbies):
                    commonHobbies += 1

        if (commonHobbies > 3):
            hobbiesOK = true

        if (genderOK and ageOK and hobbiesOK):
            foundMatch = possibleMatch

    return foundMatch