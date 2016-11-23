func getPerfectMatch(person: Person) -> Person {

    let availablePeople = getListOfPeople() // Out of the scope of this kata
    var foundMatch: Person
    for possibleMatch in availablePeople {
        var genderOK = false
        var ageOK = true
        var hobbiesOK = false
        if (person.gender == 'male' && possibleMatch.gender == 'female') ||
            (person.gender == 'female' && possibleMatch.gender == 'male') {
            // This check is not intended to force anyone's sexuality.
            // Just an example for the kata.
            genderOK = true
        }
        if (possibleMatch.age < ((person.age - 7) * 2)) ||
            (person.age < ((possibleMatch.age -7) * 2)) {
            // Use the half-your-age-plus-seven rule to calculate if the age matches
            // http://www.urbandictionary.com/define.php?term=half-your-age-plus-seven
            ageOK = false
        }
        var commonHobbies = 0
        for hobby in match.hobbies {
            for myHobbies in person.hobbies {
                if hobby == myHobbies {
                    commonHobbies += 1
                }
            }
        }
        if commonHobbies > 3 {
            hobbiesOK = true
        }

        if genderOK && ageOK && hobbiesOK {
            foundMatch = possibleMatch
        }
    }
    return foundMatch
}