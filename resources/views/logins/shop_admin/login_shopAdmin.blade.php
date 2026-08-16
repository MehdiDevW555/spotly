<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spotly Login</title>

    <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Hanken Grotesk', sans-serif;
            background: #121315;
            min-height: 100dvh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .login-card {
            width: 100%;
            max-width: 400px;
            background: #16191D;
            border: 1px solid #343536;
            border-radius: 18px;
            padding: 40px 30px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, .35);
        }

        .logo {
            text-align: center;
            margin-bottom: 25px;
        }

        .logo img {
            width: 220px;
            max-width: 100%;
            margin-bottom: 15px;
        }

        .logo h1 {
            color: #E3E2E3;
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 10px;
        }

        .logo p {
            color: #C7C4D8;
            font-size: .95rem;
            line-height: 1.6;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 18px;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .input-group label {
            color: #C7C4D8;
            font-size: .85rem;
            font-weight: 600;
        }

        .input-group input {
            width: 100%;
            background: #0D0E0F;
            border: 1px solid #343536;
            border-radius: 12px;
            padding: 14px 16px;
            color: #E3E2E3;
            font-size: 15px;
            transition: .3s;
        }

        .input-group input::placeholder {
            color: #6e6f70;
        }

        .input-group input:focus {
            outline: none;
            border-color: #635BFF;
        }

        .login-btn {
            margin-top: 5px;
            border: none;
            border-radius: 12px;
            padding: 14px;
            background: #635BFF;
            color: white;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
            transition: .3s;
        }

        .login-btn:hover {
            background: #7000FF;
        }

        .err {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #93000A;
            color: white;
            padding: 12px 18px;
            border-radius: 12px;
            z-index: 1000;
            width: 90%;
            max-width: 350px;
            text-align: center;
        }

        .close-btn {
            position: absolute;
            left: 12px;
            top: 6px;
            cursor: pointer;
            font-size: 22px;
            font-weight: bold;
        }

        @media (max-width: 480px) {
            .login-card {
                padding: 30px 20px;
            }

            .logo img {
                width: 180px;
            }

            .logo h1 {
                font-size: 1.7rem;
            }

            .logo p {
                font-size: .85rem;
            }
        }
    </style>
</head>

<body>

    @if (session('login_error'))
        <div id="login-error-box" class="err">
            <span class="close-btn" onclick="document.getElementById('login-error-box').style.display='none'">
                &times;
            </span>

            {{ session('login_error') }}
        </div>
    @endif

    <div class="login-card">

        <div class="logo">
            <img src="/images/spotlyLogo.png" alt="Spotly Logo">

            <h1>Welcome Back</h1>

            <p>
                قم بتسجيل الدخول للمتابعة إلى حسابك في Spotly
            </p>
        </div>

        <form method="POST" action="{{ route('login_shopAdmin') }}">
            @csrf

            <div class="input-group">
                <label>اسم المستخدم</label>
                <input type="text" name="email" placeholder="أدخل اسم المستخدم" required>
            </div>

            <div class="input-group">
                <label>كلمة المرور</label>
                <input type="password" name="password" placeholder="••••••••" required>
            </div>

            <button type="submit" class="login-btn">
                تسجيل الدخول
            </button>

        </form>
        <div
            style="
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
        font-size: 14px;
    ">
            <span style="color: #8f9094;">
                ليس لديك حساب؟
            </span>

            <a href="/shopAdmin/register"
                style="
            color: #635BFF;
            font-weight: 700;
            text-decoration: none;
            transition: .2s;
        "
                onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">
                إنشاء حساب
            </a>
        </div>

    </div>

</body>

</html>
