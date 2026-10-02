# Example Lab — Static Website

연구실 홈페이지(한 페이지 스크롤형, 영어). 디자인은 밝은 학술 스타일(버전 B), 섹션 구성은 PROJECT HORIZON 템플릿(버전 A)을 따릅니다. 프레임워크·빌드 도구 없이 HTML/CSS/JS 세 파일만으로 구성되어 있어 GitHub Pages에 바로 배포할 수 있습니다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 모든 내용이 담긴 메인 페이지 |
| `style.css` | 디자인. 파일 맨 위 `:root` 변수(`--paper`, `--ink`, `--accent`)만 바꿔도 전체 분위기가 바뀜 |
| `script.js` | 모바일 메뉴 토글, 스크롤 시 네비게이션 활성 표시, 푸터 "Last updated" 자동 날짜 |

## 섹션 구성 (버전 A 구조)

1. **Hero** — 연구실 한 줄 소개 + 위치/설립연도 키워드
2. **01 About** — 큰 제목 + 소개문 + 핵심 키워드 칩
3. **Our Question** — 연구실을 대표하는 질문 (강조 배경)
4. **02 Research** — 번호가 매겨진 연구 프로젝트 카드 3개
5. **03 Program** — 연구/활동 타임라인 (Phase 01~04)
6. **04 Team** — 이니셜 아바타 카드 (사진 불필요)
7. **05 Archive** — 보고서·자료·영상·데이터 링크 목록
8. **Contact** — 이메일 + 주소 + 학생 모집 안내

## 내용 수정

`index.html`을 열어 `[...]`로 표시된 부분을 실제 정보로 바꾸세요.

- `Example Lab` / `Your University` → 연구실·대학 이름
- Hero 문장, About 단락, Our Question 문구
- Research 카드(3개) — 필요하면 `research-card` 블록을 복사해 추가
- Program 타임라인 항목 — `timeline article` 블록 복사
- Team 카드 — `person` 블록 복사 (portrait의 이니셜만 바꾸면 됨)
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
