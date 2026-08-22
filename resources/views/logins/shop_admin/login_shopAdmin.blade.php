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


        .password-wrapper {
    position: relative;
    width: 100%;
}

.password-wrapper input {
    padding-left: 50px;
}

.toggle-password {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);

    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: none;
    background: transparent;

    color: #8f9094;

    cursor: pointer;

    transition: color .2s ease;
}

.toggle-password:hover {
    color: #635BFF;
}

.toggle-password svg {
    display: block;
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
<script>
    function togglePassword() {
        const password = document.getElementById("password");
        const eyeIcon = document.getElementById("eye-icon");
        const eyeOffIcon = document.getElementById("eye-off-icon");
        const button = document.querySelector(".toggle-password");

        if (password.type === "password") {
            password.type = "text";

            eyeIcon.style.display = "none";
            eyeOffIcon.style.display = "block";

            button.setAttribute("aria-label", "إخفاء كلمة المرور");
        } else {
            password.type = "password";

            eyeIcon.style.display = "block";
            eyeOffIcon.style.display = "none";

            button.setAttribute("aria-label", "إظهار كلمة المرور");
        }
    }
</script>
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
                <label>البريد الالكتروني (Email)</label>
                <input type="text" name="email" placeholder="أدخل البريد الالكتروني" required>
            </div>

          <div class="input-group">
    <label>كلمة المرور</label>

    <div class="password-wrapper">
        <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
        >

        <button
            type="button"
            class="toggle-password"
            onclick="togglePassword()"
            aria-label="إظهار كلمة المرور"
        >
            <!-- Eye -->
            <svg
                id="eye-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
            </svg>

            <!-- Eye Off -->
            <svg
                id="eye-off-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="display: none;"
            >
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-4.123 5.194" />
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696A10.75 10.75 0 0 1 6.24 6.5" />
                <path d="m2 2 20 20" />
            </svg>
        </button>
    </div>
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
