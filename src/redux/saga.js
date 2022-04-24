import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { getMember, getYoutube, getGallery } from './api';
import * as types from './actionType';

export default function* rootSaga() {
	yield all([fork(callMember), fork(callYoutube), fork(callGallery)]);
}

export function* callMember() {
	yield takeLatest(types.MEMBER.start, returnMember);
}
export function* returnMember() {
	try {
		const response = yield call(getMember);
		yield put({ type: types.MEMBER.success, payload: response.data.data });
	} catch (err) {
		yield put({ type: types.MEMBER.error, payload: err });
	}
}

export function* callYoutube() {
	yield takeLatest(types.YOUTUBE.start, returnYoutube);
}
export function* returnYoutube() {
	try {
		const response = yield call(getYoutube);
		yield put({ type: types.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: types.YOUTUBE.error, payload: err });
	}
}

export function* callGallery() {
	yield takeLatest(types.GALLERY.start, returnGallery);
}
export function* returnGallery() {
	try {
		const response = yield call(getGallery);
		yield put({
			type: types.GALLERY.success,
			payload: response.data.photoset.photo,
		});
	} catch (err) {
		yield put({ type: types.GALLERY.error, payload: err });
	}
}
