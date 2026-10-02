# Symposium Page — Static Website

심포지엄 소개 페이지(한 페이지 스크롤형, 영어). 디자인은 밝은 학술 스타일(버전 B), 섹션 구성은 PROJECT HORIZON 템플릿(버전 A)을 따릅니다. 프레임워크·빌드 도구 없이 HTML/CSS/JS 세 파일만으로 구성되어 있어 GitHub Pages에 바로 배포할 수 있습니다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 모든 내용이 담긴 메인 페이지 |
| `style.css` | 디자인. 파일 맨 위 `:root` 변수(`--paper`, `--ink`, `--accent`)만 바꿔도 전체 분위기가 바뀜 |
| `script.js` | 모바일 메뉴 토글, 스크롤 시 네비게이션 활성 표시, 푸터 "Last updated" 자동 날짜 |

## 섹션 구성 (GradLINK 심포지엄 구조)

1. **Hero** — 심포지엄명, 주제, 일시/신청 기간/이벤트 링크 + Abstract·Speakers·Committee·Brochure 바로가기
2. **01 About** — 큰 제목 + 소개문 + 핵심 키워드 칩
3. **Welcome Message** — 개회 인사 (강조 배경)
4. **02 Speakers** — 키노트 스피커 카드 + 트랙별 스피커 그리드
5. **03 Committee** — 조직위원회 카드 (이니셜 아바타, 사진 불필요)
6. **04 Program** — 심포지엄 당일 일정 타임라인
7. **05 Abstract** — 초록 접수 안내 + 채택 초록 목록
8. **06 Archive** — 브로슈어·녹화·사진·지난 회차 링크
9. **Contact** — 이메일 + 주소 + 초록 문의 안내

> 참조: https://gradlink.snu.ac.kr/ (SNU 간호대학 GradLINK 심포지엄 사이트)

## 내용 수정

`index.html`을 열어 `[...]`로 표시된 부분을 실제 정보로 바꾸세요.

- `Symposium Horizon` → 심포지엄 이름, Hero의 일시/신청 기간/이벤트 링크
- About 단락, Welcome Message 문구, 키워드 칩
- Speakers — `keynote-card` 1개 + `track-heading` + `team-grid` 블록을 트랙별로 복사
- Committee — `person` 블록 복사 (portrait의 이니셜만 바꾸면 됨)
- Program — `timeline article` 블록 복사
- Abstract — 접수 기간·이메일, 채택 초록(`abstract-list li`) 복사
- Archive 링크, Contact 이메일/주소

## 로컬에서 확인하기

`index.html`을 브라우저로 열면 됩니다. (인터넷 연결이 있어야 Google Fonts가 로드되며, 없으면 시스템 대체 서체로 표시됩니다.)

## GitHub Pages로 배포하기

1. GitHub에서 새 저장소를 만듭니다(예: `your-lab-site`). 공개 저장소를 권장합니다.
2. 이 세 파일(`index.html`, `style.css`, `script.js`)과 이 README를 업로드합니다.
   ```bash
   git init
   git add .
   git commit -m "Lab site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages**로 이동합니다.
4. **Deploy from a branch** 선택 → Branch에서 `main`과 `/(root)`를 고르고 **Save**.
5. 1~2분 후 `https://<username>.github.io/<repo>/`에서 사이트를 확인할 수 있습니다.

이후 내용을 고치면 파일을 수정하고 다시 `git add . && git commit -m "..." && git push` 하면 자동으로 반영됩니다.

## 커스터마이징 팁

- **색상 바꾸기**: `style.css` 상단의 `--accent`(강조색)만 바꿔도 링크·버튼·태그가 모두 함께 바뀝니다.
- **폰트**: `index.html`의 Google Fonts 링크를 바꾸거나 제거하면 됩니다(제거 시 `style.css`의 `--font-serif`, `--font-sans`에서 지정한 시스템 서체로 표시).
- **도메인 연결**: 원하면 커스텀 도메인을 Settings → Pages → Custom domain에 등록할 수 있습니다.
