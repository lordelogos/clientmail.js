<div align="center"><img src="https://github.com/lordelogos/clientmail.js/assets/67395687/d4a32333-b592-465d-a1ae-04d5954d204a" alt="client mail logo"></div>

<div align="center"><h1>Clientmail</h1></div>

Clientmail is a package that allows you send emails directly from your client-side code in your javascript or typescript project. You can easily integrate email functionality into your web applications without any need for server-side code or complicated overhead. The process of sending emails is all handled for you in a quick and reliable way.

## Supported email services

Clientmail emables you to send emails from your client-side code by connecting your email services. For now, there is support for the following:

- [Resend](https://resend.com)

It is on the roadmap to add more email providers. Contributions and suggestions are always welcome.

## Installation

1. Setup your account and connect to your email provider at the [Clientmail homepage](https://clientmail.xyz)

2. Add `clientmail` to your project using your preferred package manager:

   With Yarn

   ```sh
   yarn add client-mail
   ```

   With Npm

   ```sh
   npm install client-mail
   ```

   With Pnpm

   ```sh
   pnpm install client-mail
   ```

3. Create an instance of the ClientMail class and pass in your public key

   ```js
   import { ClientMail } from "client-mail";
   const clientMail = new ClientMail("rc_A1.."); //replace with your public key
   ```

4. Send your emails with your selected email service

   ```js
   // Using resend [resend.com]

   const data = {
     from: "Acme <onboarding@resend.dev>",
     to: ["delivered@resend.dev"],
     subject: "Hello World",
     html: "<strong>Test mail from client-mail</strong>",
   };

   clientMail.resend(data);
   ```

## Plugins

The main goal of this package is to provide a very lightweight solution while offering optional addons that you can easily opt-in and out of as needed. Client-mail comes with a plugin system to enables you to extend its functionality. Available plugins include:-

#### [React Email Plugin](https://www.npmjs.com/package/@clientmail/react-email): This plugin to enable you to send emails with templates built with [react-email](https://react.email).

The available plugins are limited for now but there are more on the roadmap and suggestions are always welcome.

## Contributing

Contributions to `client-mail` are welcome! If you find a bug, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request. Please make sure to follow the existing coding style and conventions.

When submitting a pull request, provide a clear description of the changes made and ensure that all tests pass. Adding appropriate tests for new features or bug fixes is highly appreciated.

## Bugs and Feature Requests

For bugs and feature requests, [please create an issue](https://github.com/REPLACE_ME/issues/new/choose).

## Author

- Paul Ehikhuemen ([@pauloe_me](https://twitter.com/pauloe_me))

## License

`client-mail` is licensed under the MIT License.
