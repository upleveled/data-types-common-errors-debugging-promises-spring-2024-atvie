import { fakeFetch } from './util/fakeFetch.js';

// - promises are "data or functionality that will be available /
//   done in future"
// - "unwrap" the value in a promise by using the await keyword

// console.log(
//   await new Promise((resolve) => {
//     setTimeout(() => resolve(1), 0);
//   }),
// );

// `await` can be used with promises too
//
// For the exercise below, we can't use await
console.log(
  'fakeFetch youtube',
  await fakeFetch('https://example.com/youtube'),
);
console.log('fakeFetch google', await fakeFetch('https://example.com/google'));

// Can't use setTimeout, because we don't know how long each will
// take
//
// const youtubePromise = fakeFetch('https://example.com/youtube');
// const googlePromise = fakeFetch('https://example.com/google');
//
// setTimeout(() => {
//   console.log('youtube', youtubePromise);
//   console.log('google', googlePromise);
// }, 3000);

// Goal - write the responses in order of youtube, and then
// google, regardless of how long each of them take:
//
// youtube response  ... google response  ...

let youtubeResponseRootScope;
let googleResponseRootScope;

// console.log('1: fakeFetch for YouTube');
fakeFetch('https://example.com/youtube')
  .then((youtubeResponse) => {
    // console.log('3 or 4: then for YouTube');
    youtubeResponseRootScope = youtubeResponse;
    // Print messages if Google already done
    if (googleResponseRootScope !== undefined) {
      console.log('youtube response', youtubeResponseRootScope);
      console.log('google response', googleResponseRootScope);
    }
    // console.log('youtube response', youtubeResponseRootScope);
  })
  .catch((youtubeError) => console.error(youtubeError));

// console.log('2: fakeFetch for Google');
fakeFetch('https://example.com/google')
  .then((googleResponse) => {
    // console.log('3 or 4: then for Google');
    googleResponseRootScope = googleResponse;
    // Print the messages if YouTube already done
    if (youtubeResponseRootScope !== undefined) {
      console.log('youtube response', youtubeResponseRootScope);
      console.log('google response', googleResponseRootScope);
    }

    // console.log('google response', googleResponseRootScope);
  })
  .catch((googleError) => console.error(googleError));

// console.log('youtubeResponseRootScope',
// youtubeResponseRootScope);
// console.log('googleResponseRootScope',
// googleResponseRootScope);

// Cannot access function-scoped parameters outside of the
// functions
//
// ReferenceError: youtubeError is not defined if (!youtubeError
// && !googleError) { console.log('no errors'); }

const [youtube, google] = await Promise.all([
  fakeFetch('https://example.com/youtube'),
  fakeFetch('https://example.com/google'),
]);

console.log('youtube', youtube);
console.log('google', google);
