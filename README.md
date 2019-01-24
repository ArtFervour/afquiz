AF Quiz
-------

This is an image quiz website made for Art Fervor. It will present 4 questions to the user. The first question asks to select a city. The next three will allow the user to pick an image out of a group of images. This will lead to a quick email poll followed by the quiz result.

# Configuration

To configure the quiz, open the `js/constants.js` file. On this file, you can change the JS object to set the quiz configs. Here's what the object should look like: 

```json
{
    "site": {
        "title": "Art Fervour Quiz"
    },
    "cities": {
        "heading": "Where do you want to see art?",
        "citylist": [
            {
                "name": "bangalore",
                "displayname": "Bangalore",
                "img": "logo.png"
            },
            {
                "name": "delhi",
                "displayname": "Delhi",
                "img": "logo.png"
            },
            {
                "name": "goa",
                "displayname": "Goa",
                "img": "logo.png"
            },
            {
                "name": "jaipur",
                "displayname": "Jaipur",
                "img": "logo.png"
            },
            {
                "name": "kochi",
                "displayname": "Kochi",
                "img": "logo.png"
            },
            {
                "name": "kolkata",
                "displayname": "Kolkata",
                "img": "logo.png"
            },
            {
                "name": "mumbai",
                "displayname": "Mumbai",
                "img": "logo.png"
            },
        ]
    },
    "q1": {
        "heading": "Q1: Pick something",
        "answerlist": [
            {
                "id": "q1a",
                "img": "q1a.png"
            },
            {
                "id": "q1b",
                "img": "q1b.png"
            },
            {
                "id": "q1c",
                "img": "q1c.png"
            }
        ]
    },
    "q2": {
        "heading": "Q2: Pick something",
        "answerlist": [
            {
                "id": "q2a",
                "img": "q2a.png"
            },
            {
                "id": "q2b",
                "img": "q2b.png"
            },
            {
                "id": "q2c",
                "img": "q2c.png"
            }
        ]
    },
    "q3": {
        "heading": "Q3: Pick something",
        "answerlist": [
            {
                "id": "q3a",
                "img": "q3a.png"
            },
            {
                "id": "q3b",
                "img": "q3b.png"
            },
            {
                "id": "q3c",
                "img": "q3c.jpg"
            }
        ]
    },
    "emailform": {
        "heading": "You're just a step away from your personalized art guide!"
    },
    "outcomes": [
        {
            "heading": "You're a Traditionalist!",
            "paragraph": "You like things traditional. Here's a guide for you:",
            "img": "traditional.jpg",
            "rr": [["q1a"], ["q2b", "q2c"], ["q3a", "q3b", "q3c"]]
        },
        {
            "heading": "You're a Progressivist!",
            "paragraph": "You like new-age shit. Here's a guide for you:",
            "img": "contemporary.jpg",
            "rr": [["q1b", "q1c"], ["q2a"], ["q3a", "q3b", "q3c"]]
        },
        {
            "heading": "You're a Mixed Bag!",
            "paragraph": "You like it all! Here's a guide for you:",
            "img": "mixed.jpg",
            "rr": [["q1b", "q1c"], ["q2b", "q2c"], ["q3a", "q3b", "q3c"]]
        },
    ]
}
```

`site` is an object for general site configs. 

| Key        | Value                                               | Value Type       |
|------------|-----------------------------------------------------|------------------|
| `title`    | Title of web page.                                  | String           |


`cities` is an object for setting the cities question. 

| Key        | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Value Type       |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| `heading`  | Question text to be displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | String           |
| `citylist` | List of city objects. There should one per city.  The cities on the question will be displayed in the same order as in this array. Each object should contain a `name`, `displayname`, and `img` key. `name` should have a unique name. It should be in lower case and have no spaces. (eg. `newdelhi`) `displayname` should have the city name as it should be displayed. (eg. `New Delhi`) `img` should be the name of the image file for the city.  This file should be stored in the path: `img/{name}/{img}`. If the city object has `newdelhi` as the `name` and `logo.png` as the `img`,  the image should be stored in the path: `img/newdelhi/logo.png`. | Array of Objects |


`q1`, `q2`, `q3` are objects for setting the image questions.

| Key          | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Value Type       |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
| `heading`    | Question text to be displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | String           |
| `answerlist` | List of answer objects. There should one per answer for this question.  The cities on the question will be displayed in the same order as in this array. Each object should contain a `id` and `img` key. `id` should have a unique ID for this answer.  It should be in lower case and have no spaces.(eg. `q1a`) `img` should be the name of the image file for the city.  This file should be stored in the path: `img/{img}`. If the city object has `q1a.png` as the `img`,  the image should be stored in the path: `img/q1a.png`. | Array of Objects |


`emailform` is an object for setting configs for the email form. 

| Key        | Value                                               | Value Type       |
|------------|-----------------------------------------------------|------------------|
| `heading`  | Question text to be displayed.                      | String           |


`outcomes` is an array for of outcome objects. The outcomes are tested for in the order that they are listed. The last outcome is the default and is not tested for. 

| Key         | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Value Type                  |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------|
| `id`        | Unique ID for each outcome.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | String                      |
| `heading`   | Outcome heading to be displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | String                      |
| `paragraph` | Outcome text to be displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | String                      |
| `img`       | `img` should be the name of the image file for the outcome. Because outcomes are different for different city selections,  this file should be stored in the path: `img/{cityname}/{img}`  for each city specified in the city list. If the city `name`s specified are `goa` and `delhi`  and `outcome.png` is the `img`, there should be images stored in the paths:  `img/goa/outcome.png` and `img/delhi/outcome.png`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String                      |
| `rr`        | This is the condition used to declare this outcome. It is an array of 3 arrays (one array per question). For this outcome to be picked, the `id` of the answer picked for `q1` must be present in the first array and the `id` of the answer picked for `q2` must be present in the second array and the `id` of the answer picked for `q3` must be present in the third array. Let's say the answer IDs for the questions are  [`q1a`, `q1b`, `q1c`], [`q2a`, `q2b`, `q2c`], and [`q3a`, `q3b`, `q3c`] [[], [], []] will never test positive.  [[`q1a`, `q1b`, `q1c`], [`q2a`, `q2b`, `q2c`], [`q3a`, `q3b`, `q3c`]] will always test positive. [[`q1a`], [`q2a`], [`q3a`]] will test positive only if the user chooses `q1a` and `q2a` and `q3a`. [[`q1a`], [`q2a`, `q2b`], [`q3a`]] will test positive only if the user chooses `q1a` and (`q2a` or `q2b`) and `q3a`. [[`q1a`], [`q2a`, `q2b`], []] will never test positive because there is no option for `q3` that will satisfy this condition. | Array of  Arrays of  String |