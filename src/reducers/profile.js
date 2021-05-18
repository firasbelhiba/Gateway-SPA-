import {
  CLEAR_PROFILE,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_REPOS,
  AVATAR_UPDATED,
  COVER_UPDATED,
  SHARE_POST,
  GET_PROFILES,
  DELETE_SHARE,
  GET_THIS_PROFILE,
  FOLLOW,
  UNFOLLOW,
  NEW_NOTIFICATION,
  REMOVE_NOTIFICATION,
  GET_SUGGESTIONS,
  GET_MOST_VIEWED_PEOPLE,
  UPDATE_SAVE_JOB,
  GET_MOST_TALENTED_PEOPLE,
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
  avatar: {},
  cover: {},
  sharedList: {},
  this_profile: null,
  following: {},
  new_notification: false,
  suggestion_list: [],
  most_viewed_profile_list: [],
  most_talented_people_list: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  // eslint-disable-next-line default-case
  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      localStorage.setItem("profile", JSON.stringify(payload));
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_THIS_PROFILE:
      localStorage.setItem("this_profile", JSON.stringify(payload));
      return {
        ...state,
        this_profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      localStorage.setItem("profiles", JSON.stringify(payload));
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case AVATAR_UPDATED:
      return {
        ...state,
        avatar: payload,
        loading: false,
      };
    case COVER_UPDATED:
      return {
        ...state,
        cover: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };
    case GET_SUGGESTIONS:
      localStorage.setItem("suggestions_friends", JSON.stringify(payload));
      return {
        ...state,
        suggestion_list: payload,
        loading: false,
      };
    case GET_MOST_VIEWED_PEOPLE:
      localStorage.setItem("most_viewed_profiles", JSON.stringify(payload));
      return {
        ...state,
        most_viewed_profile_list: payload,
        loading: false,
      };
    case GET_MOST_TALENTED_PEOPLE:
      localStorage.setItem("most_talented_people", JSON.stringify(payload));
      return {
        ...state,
        most_talented_people_list: payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    case SHARE_POST:
      return {
        ...state,
        sharedList: payload,
        loading: false,
      };
    case DELETE_SHARE:
      return {
        ...state,
        profile: {
          ...state.profile,
          shared: state.profile.shared.filter(
            (share) => share._id !== payload._id
          ),
        },
        loading: false,
      };
    case FOLLOW:
      localStorage.setItem("following", JSON.stringify(payload));
      return {
        ...state,
        following: payload,
        loading: false,
      };
    case UNFOLLOW:
      localStorage.setItem("following", JSON.stringify(payload));
      return {
        ...state,
        following: payload,
        loading: false,
      };
    case UPDATE_SAVE_JOB:
      return {
        ...state,
        profile: { ...state.profile, savedJobs: payload },
        loading: false,
      };
    default:
      return state;
  }
}
