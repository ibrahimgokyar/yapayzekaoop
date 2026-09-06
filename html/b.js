
    $(document).ready(function () {

        function openPanel() {
            $("#rightPanel").addClass("active");
            $("#panelOverlay").addClass("active");
            $("body").addClass("panel-open");

            $("#rightPanel").attr("aria-hidden", "false");

            setTimeout(function () {
                $("#name").trigger("focus");
            }, 350);
        }

        function closePanel() {
            $("#rightPanel").removeClass("active");
            $("#panelOverlay").removeClass("active");
            $("body").removeClass("panel-open");

            $("#rightPanel").attr("aria-hidden", "true");
            $("#openPanelButton").trigger("focus");
        }

        function showError(inputSelector, errorSelector, message) {
            $(inputSelector)
                .removeClass("input-success")
                .addClass("input-error");

            $(errorSelector).text(message);
        }

        function showSuccess(inputSelector, errorSelector) {
            $(inputSelector)
                .removeClass("input-error")
                .addClass("input-success");

            $(errorSelector).text("");
        }

        function clearValidation() {
            $(".form-control")
                .removeClass("input-error")
                .removeClass("input-success");

            $(".error-message").text("");
        }

        function isValidEmail(email) {
            const emailPattern =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

            return emailPattern.test(email);
        }

        function validateName() {
            const name = $("#name").val().trim();

            if (name === "") {
                showError(
                    "#name",
                    "#nameError",
                    "Ad alanı zorunludur."
                );

                return false;
            }

            if (name.length < 3) {
                showError(
                    "#name",
                    "#nameError",
                    "Ad en az 3 karakter olmalıdır."
                );

                return false;
            }

            if (!/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/.test(name)) {
                showError(
                    "#name",
                    "#nameError",
                    "Ad yalnızca harflerden oluşmalıdır."
                );

                return false;
            }

            showSuccess("#name", "#nameError");
            return true;
        }

        function validateEmail() {
            const email = $("#email").val().trim();

            if (email === "") {
                showError(
                    "#email",
                    "#emailError",
                    "E-posta alanı zorunludur."
                );

                return false;
            }

            if (!isValidEmail(email)) {
                showError(
                    "#email",
                    "#emailError",
                    "Geçerli bir e-posta adresi giriniz."
                );

                return false;
            }

            showSuccess("#email", "#emailError");
            return true;
        }

        function validateDescription() {
            const description = $("#description").val().trim();

            if (description === "") {
                showError(
                    "#description",
                    "#descriptionError",
                    "Açıklama alanı zorunludur."
                );

                return false;
            }

            if (description.length < 10) {
                showError(
                    "#description",
                    "#descriptionError",
                    "Açıklama en az 10 karakter olmalıdır."
                );

                return false;
            }

            if (description.length > 500) {
                showError(
                    "#description",
                    "#descriptionError",
                    "Açıklama en fazla 500 karakter olabilir."
                );

                return false;
            }

            showSuccess("#description", "#descriptionError");
            return true;
        }

        function validateForm() {
            const nameValid = validateName();
            const emailValid = validateEmail();
            const descriptionValid = validateDescription();

            return nameValid && emailValid && descriptionValid;
        }

        $("#openPanelButton").on("click", function () {
            openPanel();
        });

        $("#closePanelButton, #cancelButton").on("click", function () {
            closePanel();
        });

        $("#panelOverlay").on("click", function () {
            closePanel();
        });

        $(document).on("keydown", function (event) {
            if (
                event.key === "Escape" &&
                $("#rightPanel").hasClass("active")
            ) {
                closePanel();
            }
        });

        /*
         * Kullanıcı alandan ayrıldığında kontrol edilir.
         */
        $("#name").on("blur", function () {
            validateName();
        });

        $("#email").on("blur", function () {
            validateEmail();
        });

        $("#description").on("blur", function () {
            validateDescription();
        });

        /*
         * Kullanıcı yazmaya başladığında ilgili hata temizlenir.
         */
        $("#name").on("input", function () {
            if ($(this).val().trim() !== "") {
                $("#nameError").text("");
                $(this).removeClass("input-error");
            }
        });

        $("#email").on("input", function () {
            if ($(this).val().trim() !== "") {
                $("#emailError").text("");
                $(this).removeClass("input-error");
            }
        });

        $("#description").on("input", function () {
            const characterCount = $(this).val().length;

            $("#characterCounter").text(characterCount + " / 500");

            if ($(this).val().trim() !== "") {
                $("#descriptionError").text("");
                $(this).removeClass("input-error");
            }
        });

        $("#recordForm").on("submit", function (event) {
            event.preventDefault();

            if (!validateForm()) {
                const firstInvalidInput =
                    $(".form-control.input-error").first();

                if (firstInvalidInput.length > 0) {
                    firstInvalidInput.trigger("focus");
                }

                return;
            }

            const formData = {
                name: $("#name").val().trim(),
                email: $("#email").val().trim(),
                description: $("#description").val().trim()
            };

            console.log("Gönderilecek bilgiler:", formData);

            alert("Kayıt başarıyla oluşturuldu.");

            this.reset();
            clearValidation();
            $("#characterCounter").text("0 / 500");

            closePanel();
        });

    });
