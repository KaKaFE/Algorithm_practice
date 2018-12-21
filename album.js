// 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.
// 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// 	제한사항
// genres[i]는 고유번호가 i인 노래의 장르입니다.
// 	plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// genres와 plays의 길이는 같으며, 이는 1 이상 10, 000 이하입니다.
// 장르 종류는 100개 미만입니다.
// 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// 모든 장르는 재생된 횟수가 다릅니다.
// 입출력 예
// genres	plays	return
// [classic, pop, classic, classic, pop]
// [500, 600, 150, 800, 2500]
// [4, 1, 3, 0]
// 입출력 예 설명
// classic 장르는 1, 450회 재생되었으며, classic 노래는 다음과 같습니다.

// 고유 번호 3: 800회 재생
// 고유 번호 0: 500회 재생
// 고유 번호 2: 150회 재생
// pop 장르는 3, 100회 재생되었으며, pop 노래는 다음과 같습니다.
// 고유 번호 4: 2, 500회 재생
// 고유 번호 1: 600회 재생
// 따라서 pop 장르의[4, 1]번 노래를 먼저, classic 장르의[3, 0]번 노래를 그다음에 수록합니다.
var songDB = [];
var genres = ['classic', 'pop', 'classic', 'pop', 'classic', 'classic'];
var plays = [500, 600, 150, 2500, 500, 500];

function solution(genres, plays) {
	getTotalNum(genres, plays);
	getSongList(genres, plays);
	var answer = getAnswer(songDB);
	return answer;
}

function getTotalNum(genres, plays) {
	var songs = genres.reduce((acc, cur, i) => {
		var playtime = acc[cur];
		if (playtime) {
			acc[cur] = playtime + plays[i];
			return acc;
		}
		if (!playtime) {
			acc[cur] = plays[i];
			return acc;
		}
	}, {})
	for (let genres in songs) {
		var newObj = {};
		newObj['genres'] = genres;
		newObj['totalTime'] = songs[genres];
		songDB.push(newObj);
	}
}
function getSongList(genres, plays) {
	genres.forEach((a, i) => {
		var song = songDB.filter(v => v.genres === a);
		if (song[0]['songs'] === undefined) song[0]['songs'] = [];
		var song1 = { num: i, playtime: plays[i] }
		song[0]['songs'].push(song1)
	})
	songDB.forEach(v => {
		var song = Object.values(v.songs)
		song.sort((a, b) => b['playtime'] - a['playtime'])
		v.songs = song;
	})
	songDB.sort((a, b) => b['totalTime'] - a['totalTime'])
}
function getAnswer(songDB) {
	var answer = [];
	if (songDB.length <= 1) {
		if (songDB[0].songs.length < 2) {
			answer.push(songDB[0].songs[0].num)
		} else {
			answer.push(songDB[0].songs[0].num)
			answer.push(songDB[0].songs[1].num)
		}
	} else {
		if (songDB[0].songs.length < 2) {
			answer.push(songDB[0].songs[0].num)
		} else {
			answer.push(songDB[0].songs[0].num)
			answer.push(songDB[0].songs[1].num)
		}
		if (songDB[1].songs.length < 2) {
			answer.push(songDB[1].songs[0].num)
		} else {
			answer.push(songDB[1].songs[0].num)
			answer.push(songDB[1].songs[1].num)
		}
	}
	return answer;
}
// 통과못함


//다른 사람 풀이
function solution(genres, plays) {
	var dic = {};
	genres.forEach((t, i) => {
		dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
	});

	var dupDic = {};
	return genres
		.map((t, i) => ({ genre: t, count: plays[i], index: i }))
		.sort((a, b) => {
			if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
			if (a.count !== b.count) return b.count - a.count;
			return a.index - b.index;
		})
		.filter(t => {
			if (dupDic[t.genre] >= 2) return false;
			dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
			return true;
		})
		.map(t => t.index);
}

solution(genres, plays);