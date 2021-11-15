import article1 from './article/1.html'
import article2 from './article/2.html'
import article3 from './article/3.html'
import article4 from './article/4.html'
import article5 from './article/5.html'
import article6 from './article/6.html'

function HTMLparse(str) {
    var oDiv = document.createElement('div');
    oDiv.innerHTML = str;
    return oDiv.querySelector('template').innerHTML;
}
export default [{
        id: 1,
        // title: '',
        article: HTMLparse(article1)
    },
    {
        id: 2,
        // title: '',
        article: HTMLparse(article2)
    },
    {
        id: 3,
        // title: '',
        article: HTMLparse(article3)
    },
    {
        id: 4,
        // title: '',
        article: HTMLparse(article4)
    },
    {
        id: 5,
        // title: '',
        article: HTMLparse(article5)
    },
    {
        id: 6,
        // title: '',
        article: HTMLparse(article6)
    },
    {
        id: 7,
        // title: '',
        article: HTMLparse(article1)
    },
    {
        id: 8,
        // title: '',
        article: HTMLparse(article2)
    },
    {
        id: 9,
        // title: '',
        article: HTMLparse(article3)
    },
    {
        id: 10,
        // title: '',
        article: HTMLparse(article4)
    },
    {
        id: 11,
        // title: '',
        article: HTMLparse(article5)
    },
]