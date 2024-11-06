import { getDictionaryServerOnly } from '@/dictionaries/default-dictionaries-server-only';
import { Locale } from '@/i18n/config';

export default function Home({ params }: { params: { locale: Locale } }) {
  const { dictionary, interpolation } = getDictionaryServerOnly(params.locale);

  return (
    <>
      {/* <div>{dictionary.HomePage.title}</div>
      <div>{dictionary.HomePage.about}</div> */}
    </>
  );
}