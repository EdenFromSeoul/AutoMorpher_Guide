import { BASE_PATH } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="not-found"><span>404</span><h1>페이지를 찾을 수 없습니다.</h1><p>주소가 변경되었거나 문서가 이동했을 수 있습니다.</p><a className="button primary" href={`${BASE_PATH}/en/`}>가이드 홈으로 이동</a></main>
  );
}