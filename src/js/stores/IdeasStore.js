import GeneralStore from 'general-store';
import {fromJS, Map, List} from 'Immutable';
import diff from 'immutablediff'

let data = fromJS({
  ideas: fromJS({
    1: {
      id: 1,
      title: "Title One",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maiores blanditiis autem. Iste autem quibusdam aut tempore illum illo optio, saepe molestiae eligendi, eius facilis non accusantium necessitatibus, ut minus.",
      images: [
        {
          id: 4,
          src: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-364251.jpg",
          title: "Picture title"
        }
      ]
    },
    2: {
      id: 2,
      title: "Title Two",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maiores blanditiis autem. Iste autem quibusdam aut tempore illum illo optio, saepe molestiae eligendi, eius facilis non accusantium necessitatibus, ut minus.",
      images: [
        {
          id: 5,
          src: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-356694.jpg",
          title: "Picture title"
        }
      ]
    },
    3: {
      id: 3,
      title: "Title Three",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maiores blanditiis autem. Iste autem quibusdam aut tempore illum illo optio, saepe molestiae eligendi, eius facilis non accusantium necessitatibus, ut minus.",
      images: [
        {
          id: 6,
          src: "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-153798.jpg",
          title: "Picture title"
        }
      ]
    },
  }),
  numPages: 1,
  total: 3,
});

const IdeasStore = GeneralStore.define()
  .defineGet(function(key) {
    if (key) {
      return data.get(key)
    }

    return data;
  })
  .defineResponseTo('IDEAS_FETCHED', function({ideas, numPages, total}) {
    data = data.merge({
      ideas: fromJS(ideas),
      numPages: numPages,
      total: total
    })
    return;
  })
  .register();


module.exports = IdeasStore;
