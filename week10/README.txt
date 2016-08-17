The purpose of this kata is to elaborate an algorithm that could be able to distribute a bunch of engineers
regarding the needs of a company.
An engineer possess between 1 and 4 skills: Android, iOS, Frontend & Backend

Each year, the company receives a bunch of engineers, and has to decide which ones should choose to be its
'active force', and which ones have to be 'on the bench'.
The algorithm to choose the engineers follows 2 criteria:

· The percentaje of chosen engineers that have knowledge of each technology is previously defined.
· Engineers with more specialization are preferred over multidisciplinary engineers

EXAMPLE:

Set of engineers: 8 Android, 4 iOS, 9 Frontend, 6 Backend, 10 Android-iOS, 10 Android-iOS-Frontend-Backend
Percentages: 20% Android, 25% iOS, 20% Frontend, 20% Backend

That means that from a set of 60 engineers, the final selection must have:

60 engineers -> 12 eng. with Android expertise
                15 eng. with iOS expertise
                12 eng. with Frontend expertise
                12 eng. with Backend expertise

The best distribution with more specialized engineers (only 1 skill) is:

6 Android-iOS-Frontend-Backend
5 Android-iOS
1 Android
4 iOS
6 Frontend
6 Backend

