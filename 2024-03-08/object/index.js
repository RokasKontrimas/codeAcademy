const posts = [{
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    metaData: {
        createdDate: '2021-09-12',
        status: 'published',
        language: 'EN',
    },
}, {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    metaData: {
        createdDate: '2020-11-01',
        status: 'published',
        language: 'FR',
    },
}, {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    metaData: {
        createdDate: '2024-03-12',
        status: 'draft',
        language: 'LT',
    },
}, {
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    metaData: {
        createdDate: '2019-12-29',
        status: 'private',
        language: 'EN',
    },
}, {
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    metaData: {
        createdDate: '2012-01-03',
        status: 'published',
        language: 'LT',
    },
}, {
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    metaData: {
        createdDate: '2021-07-17',
        status: 'published',
        language: 'FR',
    },
}, {
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    metaData: {
        createdDate: '2023-11-22',
        status: 'draft',
        language: 'FR',
    },
}, {
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    metaData: {
        createdDate: '2014-09-07',
        status: 'private',
        language: 'EN',
    },
}, {
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    metaData: {
        createdDate: '2021-02-19',
        status: 'private',
        language: 'LT',
    },
}, {
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    metaData: {
        createdDate: '2011-04-01',
        status: 'draft',
        language: 'FR',
    },
}, {
    id: 11,
    title: "et ea vero quia laudantium autem",
    body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    metaData: {
        createdDate: '2013-05-25',
        status: 'published',
        language: 'EN',
    },
}, {
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
    metaData: {
        createdDate: '2016-08-22',
        status: 'published',
        language: 'LT',
    },
}, {
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    metaData: {
        createdDate: '2018-02-13',
        status: 'published',
        language: 'EN',
    },
}, {
    id: 14,
    title: "voluptatem eligendi optio",
    body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
    metaData: {
        createdDate: '2018-11-27',
        status: 'published',
        language: 'EN',
    },
}, {
    id: 15,
    title: "eveniet quod temporibus",
    body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    metaData: {
        createdDate: '2023-12-31',
        status: 'private',
        language: 'LT',
    },
}, {
    id: 16,
    title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
    metaData: {
        createdDate: '2013-05-14',
        status: 'draft',
        language: 'FR',
    },
}, {
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
    metaData: {
        createdDate: '2022-10-05',
        status: 'published',
        language: 'EN',
    },
}, {
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    ,
    metaData: {
        createdDate: '2021-06-20',
        status: 'private',
        language: 'FR',
    },
}, {
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
    metaData: {
        createdDate: '2011-01-01',
        status: 'published',
        language: 'EN',
    },
}, {
    id: 20,
    title: "doloribus ad provident suscipit at",
    body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
    metaData: {
        createdDate: '2020-02-26',
        status: 'published',
        language: 'LT',
    },
}, {
    id: 21,
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt",
    metaData: {
        createdDate: '2015-09-03',
        status: 'private',
        language: 'LT',
    },
}, {
    id: 22,
    title: "dolor sint quo a velit explicabo quia nam",
    body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    ,
    metaData: {
        createdDate: '2012-11-13',
        status: 'published',
        language: 'EN',
    },
}, {
    id: 23,
    title: "maxime id vitae nihil numquam",
    body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis",
    metaData: {
        createdDate: '2011-02-28',
        status: 'private',
        language: 'LT',
    },
}, {
    id: 24,
    title: "autem hic labore sunt dolores incidunt",
    body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt",
    metaData: {
        createdDate: '2024-01-22',
        status: 'published',
        language: 'FR',
    },
}, {
    id: 25,
    title: "rem alias distinctio quo quis",
    body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio",
    metaData: {
        createdDate: '2009-02-05',
        status: 'published',
        language: 'EN',
    },
}]

// 7.1
for (let i = 0; i <= posts.length; i++) {
    if (i === 0) console.log(posts[i])
}

// 7.2
for (let i = 0; i <= posts.length - 1; i++) {

    if (i === posts.length - 1) console.log(posts[i])
}

// 7.3
for (let i = 0; i < posts.length; i++) {
    if (i === 14) {
        console.log(posts[i])
    }
}

// 7.4
let task4 = (data) => {
    console.log(data.slice(-13, -12))

}
task4(posts)

// 7.5
let task5 = (data) => {
    console.log(data.slice(data.length / 2, data.length / 2 + 1))
}
task5(posts)

// 7.6
let task6 = (data) => {
    console.log(data.slice(0, 4));
}
task6(posts)

// 7.7
let task7 = (data) => {
    console.log(data.slice(-5))
}
task7(posts)

// 7.8
let task8 = (data) => {
    console.log(data.slice(4, 15))
}
task8(posts)

// 7.9
for (let i = 0; i < posts.length; i++) {
    if (i % 2 === 0) {
        console.log(posts[i]);
    }
}

// 7.10
console.log('first', posts[0])
console.log('last', posts[posts.length - 1])

// 7.11
console.log(posts[0].title)

// 7.12
console.log(posts[1].body)

// 7.13
console.log(posts[2].title)

// 7.14
console.groupCollapsed('task 7.14')
for (let i in posts) {
    console.log(posts[i])
}
console.groupEnd()

// 7.15
console.groupCollapsed('task 7.15')
for (let i in posts) {
    console.log(posts[i].title)
}
console.groupEnd()

// 7.16
console.groupCollapsed('task 7.16')
for (let i in posts) {
    console.log(posts[i].body)
}
console.groupEnd()

// 7.16
console.groupCollapsed('task 7.17')
for (let i in posts) {
    let title = posts[i].title;
    let body = posts[i].body;
    console.log(`Title: \"${title}\"\n Content: \"${body}\"`)
}
console.groupEnd()
// 7.18
console.groupCollapsed('task 7.18')
let firstFour = posts.slice(0, 4);
for (let i in firstFour) {
    console.log(`Title: ${firstFour[i].title},\n Content: ${firstFour[i].body}`)
}
console.groupEnd()

// 7.19
console.groupCollapsed('task 7.19')

let lastSeven = posts.slice(-7)
for (let i in lastSeven) {
    console.log(`Title: ${lastSeven[i].title},\n Content: ${lastSeven[i].body}`)
}
console.groupEnd()


let createElementList = (elements, index) => {
    let body = document.querySelector("body");
    let div = document.createElement('div');
    let h2 = document.createElement('h2')
    body.appendChild(div);
    div.appendChild(h2);
    h2.textContent = `Task ${index}`
    let ul = document.createElement('ul');
    ul.id = `task-${index}`;
    div.appendChild(ul);
    div.style.borderBottom = '2px solid green';

    for (let i = 0; i < elements.length; i++) {
        let li = document.createElement('li');
        li.textContent = elements[i];
        ul.appendChild(li);
    }
}
let createFormat = (title, body, metaData = '') => {
    if (metaData !== '') {
        return `Title: ${title}. Content: ${body} Created At: ${metaData.createdDate} Post status: ${metaData.status} Language: ${metaData.language}`;
    }
    return `Title: ${title}. Content: ${body}`;

}
// let metaDataParser = (metaData) => {
//     let createdDate;
//     let status;
//     let language;
//     for (let i = 0; i < metaData.length; i++) {
//         createdDate = metaData[0].createdDate
//         status = metaData[0].status
//         language = metaData[0].language
//     }
// }

// 7.20
let task20 = posts.map((post) => {
    return `Title: ${post.title}`;
});
createElementList(task20, 0)

// 7.21
let task21 = posts.map((post) => {
    return createFormat(post.title, post.body)
});
createElementList(task21, 1)

// 7.22
let task22 = posts.filter(post => post.title[0] === "s")
    .map(post => {
        return createFormat(post.title, post.body)
    });
createElementList(task22, 2)

// 7.23
let task23 = posts.filter(post => post.title[post.title.length - 1] === "t" || post.title[post.title.length - 1] === "m").map(post => {
    return createFormat(post.title, post.body)
})

createElementList(task23, 3)


// 7.24
let task24 = posts.filter(post => post.title.length > 15).map((post) => {
    return createFormat(post.title, post.body)
})
createElementList(task24, 4)

// 7.25

let task25 = posts.filter(pair => {
    return pair.title.length < 20 && pair.body.length > 50;
}).map((post) => {
    return createFormat(post.title, post.body)
})
createElementList(task25, 5);


// 7.26

let task26 = posts.filter(post => {
    let title = post.title;
    let body = post.body;
    return title.length >= 20 && title.length <= 30 && body.length >= 70 && body.length <= 130;
}).map((post) => {
    return createFormat(post.title, post.body)
})

createElementList(task26, 6);

// 7.27
let task27 = posts.filter(post => {
    let title = post.title;
    let body = post.body;
    return title.includes('it') && body.includes('quo');
}).map((post) => {
    return createFormat(post.title, post.body)

})

createElementList(task27, 7);

// 7.28

let task28 = posts.filter(post => {
    let title = post.title;
    let body = post.body;
    return body.includes('sit') && !/\bsit\w*/.test(body)
}).map((post) => {
    return createFormat(post.title, post.body)
})
createElementList(task28, 8)


// 7.29
let task29 = posts.filter(post => {
    let title = post.title;
    let body = post.body;
    return (title.split('a').length - 1) > 3 && (body.split('o').length - 1) < 7;
}).map((post) => {
    return createFormat(post.title, post.body)
})
createElementList(task29, 9)

// 7.30
let task30 = posts.map((post) => {
    return `Title: ${post.title}. Content: ${post.body}. Length: ${post.body.length}.`;
})
createElementList(task30, 10)

// 7.31
let task31 = posts.filter(post => {
    if (new Date("2023-12-31").toISOString().split('T')[0] < post.metaData.createdDate) {
        return post
    }
}).map(post => {

    return createFormat(post.title, post.body, post.metaData)
})
createElementList(task31, 11)

// 7.32
let task32 = posts.filter(post => {
    if (post.metaData.status === 'published') {
        return post
    }
}).map(post => {
    return createFormat(post.title, post.body, post.metaData)
})
createElementList(task32, 12)

// 7.33
let task33 = posts.filter(post => {
    if (post.metaData.language === 'EN') {
        return post
    }
}).map(post => {
    return createFormat(post.title, post.body, post.metaData)
})
createElementList(task33, 13)

// 7.34
let task34 = posts.filter(post => {
    if (post.metaData.status !== 'private' && post.metaData.language !== 'FR') {
        return post
    }
}).map(post => {
    return createFormat(post.title, post.body, post.metaData)
})
createElementList(task34, 14)

// 7.35
let task35 = posts.filter(post => {
    if (post.metaData.status !== 'draft' && new Date(post.metaData.createdDate).getFullYear() === 2023 && post.metaData.language === 'LT') {
        return post
    }
}).map(post => {
    return createFormat(post.title, post.body, post.metaData)
})
createElementList(task35, 15)