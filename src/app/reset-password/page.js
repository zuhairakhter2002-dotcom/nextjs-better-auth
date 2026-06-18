import { Suspense } from "react";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import Loading from "../Loading";

export default function Page() {
  return (
    <Suspense fallback={<div><Loading/></div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}