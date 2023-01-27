import { ReactElement } from "react";
import useSWR from 'swr';
import SiteLayout from "../../../components/SiteLayout";

import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

const pagarProduto = () => {
  const router = useRouter();
  const { data: payment, error } = useSWR(
    !router.query.id ? null : `/api/payment/${router.query.id}`, 
    async (url) => await (await fetch(url)).json(), 
    {
      revalidateOnFocus: false
    }
  );

  return (
    <>
      <Head>
          <title>Pedidos</title>
      </Head>
      <div className="overflow-hidden">
          <div 
              className="bg-[url('https://cdn.discordapp.com/attachments/1063180963439464641/1063653322894098443/banner.jpg')]"
              style={{
                  height: 303
              }}
          />
          <div>
            {!payment && !error &&
              <div className="w-6 h-6 rounded-full border-4 border-white border-b-gray-500 animate-spin mx-auto" />
            }
            {payment &&
              <Image className="mx-auto" src={`${payment?.qrcode}`} alt="qrcode" width={228} height={228} />}
          </div>
      </div>
    </>
  );
};

export default pagarProduto;

pagarProduto.getLayout = (page: ReactElement) => {
  return (
    <SiteLayout>
      {page}
    </SiteLayout>
  );
};