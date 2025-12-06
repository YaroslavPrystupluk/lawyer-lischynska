import { FirebaseError } from "firebase/app";

// https://firebase.google.com/docs/auth/admin/errors

export const generateFirebaseAuthErrorMessage = (error: FirebaseError) => {
  let message: string | null = null;
  if (error?.code == "auth/invalid-credential") {
    message =  "Недійсні електронна пошта або пароль. Спробуйте ще раз.";
  } else {
    message = "Ой! Щось пішло не так. Спробуйте пізніше.";
  }
  return message
};


// switch (error?.code) {
//   case "auth/invalid-email":
//     message = "Неправильна адреса електронної пошти. Введіть правильну адресу електронної пошти.";
//     break;
//   case "auth/user-not-found":
//     message = "Користувач не знайдений. Перевірте адресу електронної пошти.";
//     break;
//   case "auth/wrong-password":
//     message = "Неправильний пароль. Спробуйте ще раз.";
//     break;
//   case "auth/email-already-in-use":
//     message = "Електронна адреса вже використовується. Спробуйте іншу адресу.";
//     break;
//   case "auth/weak-password":
//     message = "Пароль повинен складатися щонайменше з 6 символів.";
//     break;
//   case "auth/operation-not-allowed":
//     message = "Операція заборонена. Спробуйте пізніше.";
//     break;
//   case "auth/invalid-verification-code":
//     message = "Недійсний код підтвердження. Спробуйте ще раз.";
//     break;
//   case "auth/invalid-verification-id":
//     message = "Недійсний ідентифікатор перевірки. Спробуйте ще раз.";
//     break;
//   case "auth/code-expired":
//     message = "Код закінчився. Спробуйте ще раз.";
//     break;
//   case "auth/invalid-action-code":
//     message = "Недійсний код. Спробуйте ще раз.";
//     break;
//   case "auth/user-disabled":
//     message = "Користувач заблокований. Зверніться до служби підтримки.";
//     break;
//   case "auth/invalid-credential":
//     message = "Недійсні електронна пошта або пароль. Спробуйте ще раз.";
//     break;
//   case "auth/invalid-continue-uri":
//     message = "Invalid continue URL. Please try again.";
//     break;
//   case "auth/unauthorized-continue-uri":
//     message = ("Unauthorized continue URL. Please try again.");
//     break;
//   case "auth/missing-continue-uri":
//     message = ("Missing continue URL. Please try again.");
//     break;
//   case "auth/missing-verification-code":
//     message = ("Missing verification code. Please try again.");
//     break;
//   case "auth/missing-verification-id":
//     message = ("Missing verification ID. Please try again.");
//     break;
//   case "auth/captcha-check-failed":
//     message = ("Captcha check failed. Please try again.");
//     break;
//   case "auth/invalid-phone-number":
//     message = ("Invalid phone number. Please try again.");
//     break;
//   case "auth/missing-phone-number":
//     message = ("Missing phone number. Please try again.");
//     break;
//   case "auth/quota-exceeded":
//     message = ("Quota exceeded. Please try again.");
//     break;
//   case "auth/missing-app-credential":
//     message = ("Missing app credential. Please try again.");
//     break;
//   case "auth/invalid-app-credential":
//     message = ("Invalid app credential. Please try again.");
//     break;
//   case "auth/session-expired":
//     message = ("Session expired. Please try again.");
//     break;
//   case "auth/missing-or-invalid-nonce":
//     message = ("Missing or invalid nonce. Please try again.");
//     break;
//   case "auth/missing-client-identifier":
//     message = ("Missing client identifier. Please try again.");
//     break;
//   case "auth/key-retrieval-failed":
//     message = ("Key retrieval failed. Please try again.");
//     break;
//   case "auth/invalid-oauth-provider":
//     message = ("Invalid OAuth provider. Please try again.");
//     break;
//   case "auth/invalid-oauth-client-id":
//     message = ("Invalid OAuth client ID. Please try again.");
//     break;
//   case "auth/invalid-cert-hash":
//     message = ("Invalid cert hash. Please try again.");
//     break;
//   case "auth/invalid-user-token":
//     message = ("Invalid user token. Please try again.");
//     break;
//   case "auth/invalid-custom-token":
//     message = ("Invalid custom token. Please try again.");
//     break;
//   case "auth/app-deleted":
//     message = ("App deleted. Please try again.");
//     break;
//   case "auth/app-not-authorized":
//     message = ("App not authorized. Please try again.");
//     break;
//   case "auth/argument-error":
//     message = ("Argument error. Please try again.");
//     break;
//   case "auth/invalid-api-key":
//     message = ("Invalid API key. Please try again.");
//     break;
//   case "auth/network-request-failed":
//     message = ("Network request failed. Please try again.");
//     break;
//   case "auth/requires-recent-login":
//     message = ("Requires recent login. Please try again.");
//     break;
//   case "auth/too-many-requests":
//     message = ("Too many requests. Please try again.");
//     break;
//   case "auth/unauthorized-domain":
//     message = ("Unauthorized domain. Please try again.");
//     break;
//   case "auth/user-token-expired":
//     message = ("User token expired. Please try again.");
//     break;
//   case "auth/web-storage-unsupported":
//     message = ("Web storage unsupported. Please try again.");
//     break;
//   case "auth/account-exists-with-different-credential":
//     message = ("Account exists with different credential. Please try again.");
//     break;
//   case "auth/auth-domain-config-required":
//     message = ("Auth domain config required. Please try again.");
//     break;
//   case "auth/cancelled-popup-request":
//     message = ("Cancelled popup request. Please try again.");
//     break;
//   case "auth/credential-already-in-use":
//     message = ("Credential already in use. Please try again.");
//     break;
//   case "auth/custom-token-mismatch":
//     message = ("Custom token mismatch. Please try again.");
//     break;
//   case "auth/provider-already-linked":
//     message = ("Provider already linked. Please try again.");
//     break;
//   case "auth/timeout":
//     message = ("Timeout. Please try again.");
//     break;
//   case "auth/missing-android-pkg-name":
//     message = ("Missing Android package name. Please try again.");
//     break;
//   case "auth/missing-ios-bundle-id":
//     message = ("Missing iOS bundle ID. Please try again.");
//     break;
//   case "auth/invalid-dynamic-link-domain":
//     message = ("Invalid dynamic link domain. Please try again.");
//     break;
//   case "auth/invalid-persistence-type":
//     message = ("Invalid persistence type. Please try again.");
//     break;
//   case "auth/unsupported-persistence-type":
//     message = ("Unsupported persistence type. Please try again.");
//     break;
//   case "auth/invalid-oauth-client-secret":
//     message = ("Invalid OAuth client secret. Please try again.");
//     break;
//   case "auth/invalid-argument":
//     message = ("Invalid argument. Please try again.");
//     break;
//   case "auth/invalid-creation-time":
//     message = ("Invalid creation time. Please try again.");
//     break;
//   case "auth/invalid-disabled-field":
//     message = ("Invalid disabled field. Please try again.");
//     break;
//   case "auth/invalid-display-name":
//     message = ("Invalid display name. Please try again.");
//     break;
//   case "auth/invalid-email-verified":
//     message = ("Invalid email verified. Please try again.");
//     break;
//   case "auth/invalid-hash-algorithm":
//     message = ("Invalid hash algorithm. Please try again.");
//     break;
//   case "auth/invalid-hash-block-size":
//     message = ("Invalid hash block size. Please try again.");
//     break;
//   case "auth/invalid-hash-derived-key-length":
//     message = ("Invalid hash derived key length. Please try again.");
//     break;
//   case "auth/invalid-hash-key":
//     message = ("Invalid hash key. Please try again.");
//     break;
//   case "auth/invalid-hash-memory-cost":
//     message = ("Invalid hash memory cost. Please try again.");
//     break;
//   case "auth/invalid-hash-parallelization":
//     message = ("Invalid hash parallelization. Please try again.");
//     break;
//   case "auth/invalid-hash-rounds":
//     message = ("Invalid hash rounds. Please try again.");
//     break;
//   case "auth/invalid-hash-salt-separator":
//     message = ("Invalid hash salt separator. Please try again.");
//     break;
//   case "auth/invalid-id-token":
//     message = ("Invalid ID token. Please try again.");
//     break;
//   case "auth/invalid-last-sign-in-time":
//     message = ("Invalid last sign in time. Please try again.");
//     break;
//   case "auth/invalid-page-token":
//     message = ("Invalid page token. Please try again.");
//     break;
//   case "auth/invalid-password":
//     message = ("Invalid password. Please try again.");
//     break;
//   case "auth/invalid-password-hash":
//     message = ("Invalid password hash. Please try again.");
//     break;
//   case "auth/invalid-password-salt":
//     message = ("Invalid password salt. Please try again.");
//     break;
//   case "auth/invalid-photo-url":
//     message = ("Invalid photo URL. Please try again.");
//     break;
//   case "auth/invalid-provider-id":
//     message = ("Invalid provider ID. Please try again.");
//     break;
//   case "auth/invalid-session-cookie-duration":
//     message = ("Invalid session cookie duration. Please try again.");
//     break;
//   case "auth/invalid-uid":
//     message = ("Invalid UID. Please try again.");
//     break;
//   case "auth/invalid-user-import":
//     message = ("Invalid user import. Please try again.");
//     break;
//   case "auth/invalid-provider-data":
//     message = ("Invalid provider data. Please try again.");
//     break;
//   case "auth/maximum-user-count-exceeded":
//     message = ("Maximum user count exceeded. Please try again.");
//     break;
//   case "auth/missing-hash-algorithm":
//     message = ("Missing hash algorithm. Please try again.");
//     break;
//   case "auth/missing-uid":
//     message = ("Missing UID. Please try again.");
//     break;
//   case "auth/reserved-claims":
//     message = ("Reserved claims. Please try again.");
//     break;
//   case "auth/session-cookie-revoked":
//     message = ("Session cookie revoked. Please try again.");
//     break;
//   case "auth/uid-already-exists":
//     message = ("UID already exists. Please try again.");
//     break;
//   case "auth/email-already-exists":
//     message = ("Email already exists. Please try again.");
//     break;
//   case "auth/phone-number-already-exists":
//     message = ("Phone number already exists. Please try again.");
//     break;
//   case "auth/project-not-found":
//     message = ("Project not found. Please try again.");
//     break;
//   case "auth/insufficient-permission":
//     message = ("Insufficient permission. Please try again.");
//     break;
//   case "auth/internal-error":
//     message = ("Internal error. Please try again.");
//     break;
//
//   default:
//     message = "Ой! Щось пішло не так. Спробуйте пізніше.";
// }