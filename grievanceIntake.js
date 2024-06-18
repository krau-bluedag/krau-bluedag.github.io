function initGrievanceForm() {
    //build Grievance form
    let grievanceTemplate = `
        <style>
            .bd-6671c9c7cb448-control {
                margin-top: 10px;
            }
            .bd-6671c9c7cb448-control-label,
            .bd-6671c9c7cb448-control-label-inline {
                font-weight: bold;
            }
            .bd-6671c9c7cb448-control-label-inline {
                width: 140px;
                float: left;
            }
            #bd-6671c9c7cb448-grievanceForm.validated input:invalid,
            #bd-6671c9c7cb448-grievanceForm.validated select:invalid,
            #bd-6671c9c7cb448-grievanceForm.validated textarea:invalid,
            .bd-6671c9c7cb448-invalidField {
                border: 1px solid red;
            }
            .bd-6671c9c7cb448-required-label {
                color: red;
            }
            .bd-6671c9c7cb448-table {
                border-collapse: collapse;
                width: 100%;
            }
            .bd-6671c9c7cb448-table th,
            .bd-6671c9c7cb448-table td {
                padding: 8px;
                text-align: left;
            }
            .bd-6671c9c7cb448-table td {
                border: 1px solid black;
            }
            #bd-6671c9c7cb448-grievanceForm h4 {
                text-align: center;
            }
            #bd-6671c9c7cb448-grievance-type-options {
                margin-left: 10px;
                padding-top: 5px;
                padding-bottom: 5px;
            }
            #bd-6671c9c7cb448-grievance-type-container {
                border: 1px solid black;
                padding: 8px;
            }
            #bd-6671c9c7cb448-grievanceFormSubmitContainer {
                margin-top: 10px;
                text-align: center;
            }
            #bd-6671c9c7cb448-grievanceFormSubmitBtn {
                padding: 8px;
            }
            #bd-6671c9c7cb448-grievanceForm textarea {
                width: 100%;
            }
            #bd-6671c9c7cb448-grievanceForm select{
                height: 21px;
            }
        </style>
        <form id="bd-6671c9c7cb448-grievanceForm" accept-charset="utf-8">
            <div id="bd-6671c9c7cb448-grievance-type-container">
                <div class="bd-6671c9c7cb448-control-label">Type of Grievance (select any that apply):</div>
                <div id="bd-6671c9c7cb448-grievance-type-options">
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Accommodation Request" /> Accommodation Request</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Program/Service" /> Program/Service</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Facility Accessibility" /> Facility Accessibility</label>
                    </div>
                    <div>
                        <label><input type="checkbox" name="GrievanceType[]" value="Other" /> Other:</label>
                        <input type="text" name="GrievanceTypeOther" value="" />
                    </div>
                </div>
                <div>
                    <label for="bd-6671c9c7cb448-cf_937" class="bd-6671c9c7cb448-control-label">Department/Program:</label>
                    <input type="text" name="cf_937" value="" id="bd-6671c9c7cb448-cf_937" required />
                </div>
            </div>
            <div>
                <h4>CONTACT INFORMATION</h4>
                <table class="bd-6671c9c7cb448-table">
                    <tr>
                        <th>Reporting Individual</th>
                        <th>On Behalf of:<br><sub>(if different than Reporting Individual)</sub></th>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Full Name:</label></div>
                            <div>
                                <input type="text" name="RequesterFirstName" value="" id="bd-6671c9c7cb448-RequesterFirstName" placeholder="First Name" aria-label="Reporting Individual First Name" required />
                                <input type="text" name="RequesterLastName" value="" id="bd-6671c9c7cb448-RequesterLastName" placeholder="Last Name" aria-label="Reporting Individual Last Name" required />
                            </div>
                        </td>
                        <td>
                            <div><label>Full Name:</label></div>
                            <div>
                                <input type="text" name="SubmitterFirstName" value="" id="bd-6671c9c7cb448-SubmitterFirstName" placeholder="First Name" aria-label="On Behalf of First Name" />
                                <input type="text" name="SubmitterLastName" value="" id="bd-6671c9c7cb448-SubmitterLastName" placeholder="Last Name" aria-label="On Behalf of Last Name" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Address:</label></div>
                            <div><input type="text" name="RequesterAddress" value="" id="bd-6671c9c7cb448-RequesterAddress" placeholder="Address" aria-label="Reporting Individual Address" required /></div>
                        </td>
                        <td>
                            <div><label>Address:</label></div>
                            <div><input type="text" name="SubmitterAddress" value="" id="bd-6671c9c7cb448-SubmitterAddress" placeholder="Address" aria-label="On Behalf of Address" /></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>City, State, and Zip Code:</label></div>
                            <div>
                                <input type="text" name="RequesterCity" value="" id="bd-6671c9c7cb448-RequesterCity" placeholder="City" aria-label="Reporting Individual City" required />
                                <select name="RequesterState" id="bd-6671c9c7cb448-RequesterState" aria-label="Reporting Individual State" required><option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select>
                                <input type="text" name="RequesterZip" value="" id="bd-6671c9c7cb448-RequesterZip" placeholder="Zip Code" aria-label="Reporting Individual Zip Code" required />
                            </div>
                        </td>
                        <td>
                            <div><label>City, State, and Zip Code:</label></div>
                            <div>
                                <input type="text" name="SubmitterCity" value="" id="bd-6671c9c7cb448-SubmitterCity" placeholder="City" aria-label="On Behalf of City" />
                                <select name="SubmitterState" id="bd-6671c9c7cb448-SubmitterState" aria-label="On Behalf of State"><option value="">State</option><option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option></select>
                                <input type="text" name="SubmitterZip" value="" id="bd-6671c9c7cb448-SubmitterZip" placeholder="Zip Code" aria-label="On Behalf of Zip Code" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>Phone:</label></div>
                            <div><input type="tel" name="RequesterPhone" value="" class="bd-6671c9c7cb448-poc" id="bd-6671c9c7cb448-RequesterPhone" placeholder="Phone Number" aria-label="Reporting Individual Phone" required /></div>
                        </td>
                        <td>
                            <div><label>Phone:</label></div>
                            <div><input type="tel" name="SubmitterPhone" value="" class="bd-6671c9c7cb448-poc" id="bd-6671c9c7cb448-SubmitterPhone" placeholder="Phone Number" aria-label="On Behalf of Phone" data-submitter="1" /></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div><label>E-mail:</label></div>
                            <div><input type="email" name="RequesterEmail" value="" class="bd-6671c9c7cb448-poc" id="bd-6671c9c7cb448-RequesterEmail" placeholder="Email" aria-label="Reporting Individual Email" required /></div>
                        </td>
                        <td>
                            <div><label>E-mail:</label></div>
                            <div><input type="email" name="SubmitterEmail" value="" class="bd-6671c9c7cb448-poc" id="bd-6671c9c7cb448-SubmitterEmail" placeholder="Email" aria-label="On Behalf of Email" data-submitter="1" /></div>
                        </td>
                    </tr>
                </table>

                <h4>COMPLAINT/INCIDENT DETAILS</h4>
                <div class="bd-6671c9c7cb448-control">
                    <label class="bd-6671c9c7cb448-control-label-inline">Date of Incident:</label>
                    <input type="date" name="IncidentDate" id="bd-6671c9c7cb448-IncidentDate" size="16" required />
                </div>
                <div class="bd-6671c9c7cb448-control">
                    <label for="bd-6671c9c7cb448-ActualAddress" class="bd-6671c9c7cb448-control-label-inline">Address:</label>
                    <input type="text" name="ActualAddress" value="" id="bd-6671c9c7cb448-ActualAddress" required />
                </div>
                <div class="bd-6671c9c7cb448-control">
                    <div>
                        <label class="bd-6671c9c7cb448-control-label-inline">City/State/Zip:</label>
                        <span>
                            <input type="text" name="LocationCity" value="" id="bd-6671c9c7cb448-LocationCity" aria-label="City" required />
                        </span>
                        <span>
                            <select name="LocationState" id="bd-6671c9c7cb448-LocationState" aria-label="State" required>
                                <option value="AL">AL</option><option value="AK">AK</option><option value="AS">AS</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FM">FM</option><option value="FL">FL</option><option value="GA">GA</option><option value="GU">GU</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MH">MH</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="MP">MP</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PW">PW</option><option value="PA">PA</option><option value="PR">PR</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VI">VI</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>                            </select>
                        </span>
                        <span>
                            <input type="text" name="LocationZip" pattern="^[0-9]{5}(?:-[0-9]{4})?$" value="" id="bd-6671c9c7cb448-LocationZip" aria-label="ZIP Code" required />
                        </span>
                    </div>
                </div>
                <div class="bd-6671c9c7cb448-control">
                    <div><label for="bd-6671c9c7cb448-Description" class="bd-6671c9c7cb448-control-label">Describe the complaint/incident:</label></div>
                    <div><textarea name="cf_938" cols="40" rows="3" id="bd-6671c9c7cb448-Description" required></textarea><div>
                </div>
                <div class="bd-6671c9c7cb448-control">
                    <div><label for="bd-6671c9c7cb448-PriorResolution" class="bd-6671c9c7cb448-control-label">Have efforts been made to resolve this complaint through the Department in which the alleged discrimination took place? If yes, please describe the efforts that have been made:</label></div>
                    <div>
                        <textarea name="cf_939" cols="40" rows="4" id="bd-6671c9c7cb448-PriorResolution" required></textarea>
                    </div>
                </div>
                <div class="bd-6671c9c7cb448-control">
                    <div><label for="bd-6671c9c7cb448-RemedySought" class="bd-6671c9c7cb448-control-label">Remedy Sought:</label></div>
                    <div>
                        <textarea name="cf_940" cols="40" rows="3" id="bd-6671c9c7cb448-RemedySought" required></textarea>
                    </div>
                </div>
            </div>
            <div id="bd-6671c9c7cb448-grievanceFormSubmitContainer">
                <button id="bd-6671c9c7cb448-grievanceFormSubmitBtn">Submit</button>
            </div>
        </form>
    `;
    document.getElementById("bd-grievance").innerHTML = grievanceTemplate;

    document.getElementById("bd-6671c9c7cb448-grievanceFormSubmitBtn").addEventListener("click", submitGrievanceForm);
    const pocFields = document.querySelectorAll('.bd-6671c9c7cb448-poc');
    for (let i = 0; i < pocFields.length; i++) {
        pocFields[i].addEventListener('change', requesterPhoneEmailValidation);
    }
}
initGrievanceForm();

function submitGrievanceForm(e) {
    e.preventDefault();

    let submitterDifferent = submitterDifferentCheck();

    let form = document.getElementById("bd-6671c9c7cb448-grievanceForm");
    form.classList.add('validated');

    if (grievanceTypeValidation() && form.checkValidity()) {
        const formFields = document.getElementById("bd-6671c9c7cb448-grievanceForm").elements;
        let postObj = {};
        let customFields = {};
        let grievanceTypes = [];
        for (let i = 0; i < formFields.length; i++) {
            const item = formFields.item(i);
            if (item.name) {
                if (item.name.startsWith('cf_')) {
                    customFields[item.name.substring(3)] = item.value;
                } else if (item.type === 'radio') {
                    if (item.checked) {
                        postObj[item.name] = item.value;
                    }
                } else if (item.type === 'checkbox' && item.name === 'GrievanceType[]') {
                    if (item.checked) {
                        grievanceTypes.push(item.value);
                    }
                } else {
                    postObj[item.name] = item.value;
                }
            }
        }

        if (!postObj.SubmitterCity) {
            postObj.SubmitterState = "";
        }

        //Handle Grievance types custom field
        if (grievanceTypes.length > 0) {
            let grievanceTypesString = grievanceTypes.join(', ');
            if (postObj.GrievanceTypeOther) {
                grievanceTypesString += `: ${postObj.GrievanceTypeOther}`;
            }
            customFields[936] = grievanceTypesString;
        }
        delete postObj.GrievanceTypeOther;

        //Add Additional required fields
        postObj.RequestTypeID = '3';
        postObj.ADAGrievance = '-1';
        postObj.LocationAddress = 'General Location';
        postObj.SubmitterDifferent = submitterDifferent;
        postObj.ExtraData = { Custom: customFields};
        if (56) {
            postObj.CompanyID = '56';
        }

        // If both "Reporting Individual" and "On Behalf Of" are filled out,
        // set the Requester field to the "On Behalf Of" data and the Submitter field to the "Reporting Individual" data.
        if (submitterDifferent == "yes") {
            let tempFirstName = postObj.RequesterFirstName;
            let tempLastName = postObj.RequesterLastName;
            let tempAddress = postObj.RequesterAddress;
            let tempCity = postObj.RequesterCity;
            let tempState = postObj.RequesterState;
            let tempZip = postObj.RequesterZip;
            let tempPhone = postObj.RequesterPhone;
            let tempEmail = postObj.RequesterEmail;

            postObj.RequesterFirstName = postObj.SubmitterFirstName;
            postObj.RequesterLastName = postObj.SubmitterLastName;
            postObj.RequesterAddress = postObj.SubmitterAddress;
            postObj.RequesterCity = postObj.SubmitterCity;
            postObj.RequesterState = postObj.SubmitterState;
            postObj.RequesterZip = postObj.SubmitterZip;
            postObj.RequesterPhone = postObj.SubmitterPhone;
            postObj.RequesterEmail = postObj.SubmitterEmail;

            postObj.SubmitterFirstName = tempFirstName;
            postObj.SubmitterLastName = tempLastName;
            postObj.SubmitterAddress = tempAddress;
            postObj.SubmitterCity = tempCity;
            postObj.SubmitterState = tempState;
            postObj.SubmitterZip = tempZip;
            postObj.SubmitterPhone = tempPhone;
            postObj.SubmitterEmail = tempEmail;
        }

        //POST to BlueDAG API
        var xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                let failureContent = "An error occurred while submitting your grievance. Please try again later. <button onclick=\"window.location.reload()\">Retry</button>";
                if (this.status == 200) {
                    if (this.response.success) {
                        document.getElementById("bd-grievance").innerHTML = "Your grievance has been submitted.";
                    } else {
                        console.log(this.response.message);
                        document.getElementById("bd-grievance").innerHTML = failureContent;
                    }
                } else {
                    document.getElementById("bd-grievance").innerHTML = failureContent;
                }
            }
        };
        xhr.open("POST", "https:\/\/api.staging.bluedag.com\/js\/grievance\/submit?jsAuth=TgOUhigytv2kUqSzwgU0mmFu1SCxMOw6qAsAm1Ed1NLL0XtlJcht4owYN2oOTXq8");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(postObj));

        document.getElementById("bd-grievance").innerHTML = "Submitting your grievance...";
    }
}

function requesterPhoneEmailValidation(e) {
    const type = e.target.dataset.submitter ? "Submitter" : "Requester";
    const formId = e.target.closest('form').getAttribute('id');
    const form = document.querySelector('#' + formId);
    const email = form.querySelector('[name="'+type+'Email"]');
    const phone = form.querySelector('[name="'+type+'Phone"]');

    if (email.value.trim()) {
        phone.removeAttribute('required');
        email.setAttribute('required', true);
    } else if (phone.value.trim()) {
        email.removeAttribute('required');
        phone.setAttribute('required', true);
    } else {
        email.setAttribute('required', true);
        phone.setAttribute('required', true);
    }
}

function submitterDifferentCheck() {
    let isSubmitterDifferent = "no";
    let submitterFields = document.getElementById("bd-6671c9c7cb448-submitterDetails");
    let submitterFirstNameField = document.getElementById("bd-6671c9c7cb448-SubmitterFirstName");
    let submitterLastNameField = document.getElementById("bd-6671c9c7cb448-SubmitterLastName");
    let submitterEmail = document.getElementById("bd-6671c9c7cb448-SubmitterEmail");
    let submitterPhone = document.getElementById("bd-6671c9c7cb448-SubmitterPhone");

    if (submitterFirstNameField && submitterFirstNameField.value) {
        if (submitterFirstNameField !== null) submitterFirstNameField.required = true;
        if (submitterLastNameField !== null) submitterLastNameField.required = true;
        if (submitterEmail !== null) {
            submitterEmail.required = false;
        }
        if (submitterPhone !== null) {
            submitterPhone.required = false;
        }
        if (submitterEmail !== null && !submitterEmail.value && submitterPhone !== null && !submitterPhone.value) {
            submitterEmail.required = true;
            submitterPhone.required = true;
        }
        isSubmitterDifferent = "yes"
    } else {
        if (submitterFirstNameField !== null) submitterFirstNameField.required = false;
        if (submitterLastNameField !== null) submitterLastNameField.required = false;
        if (submitterEmail !== null) submitterEmail.required = false;
        if (submitterPhone !== null) submitterPhone.required = false;
    }

    return isSubmitterDifferent;
}

function grievanceTypeValidation() {
    let validated = false;
    let checkboxes = document.querySelectorAll('input[name="GrievanceType[]"]');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            validated = true;
            break;
        }
    }
    let grievanceTypeOptions = document.getElementById("bd-6671c9c7cb448-grievance-type-options");
    if (grievanceTypeOptions) {
        if (!validated) {
            grievanceTypeOptions.classList.add('bd-6671c9c7cb448-invalidField');
        } else {
            grievanceTypeOptions.classList.remove('bd-6671c9c7cb448-invalidField');
        }
    }

    let otherCheckbox = document.querySelector('input[name="GrievanceType[]"][value="Other"]');
    let otherInput = document.querySelector('input[name="GrievanceTypeOther"]');
    if (otherCheckbox && otherInput) {
        if (otherCheckbox.checked) {
        otherInput.setAttribute('required', 'required');
        } else {
            otherInput.removeAttribute('required');
        }
    }

    return validated;
}
