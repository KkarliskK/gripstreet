function object_to_urlsearchparams(obj) {
	const params = new URLSearchParams();
  
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			params.append(key, obj[key]);
		}
	}
  
	return params;
}


// html form, to javascript object
function get_form_object(formId) {
	const form = document.getElementById(formId);
	const formData = new FormData(form);
	const formDataObject = {};
  
	for (const [key, value] of formData.entries()) {
	  	formDataObject[key] = value;
	}
  
	return formDataObject;
}

function form_to_obj(formId){
    return object_to_urlsearchparams(get_form_object(formId));
}

function is_valid_img_link(link) {
	// Regular expression to check if the link is in a valid URL format
	const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

	// Use the regex to check if the link format is correct
	if (!urlRegex.test(link)) {
		return false;
	}

	// Use the URL constructor to further validate the URL
	try {
		const url = new URL(link);

		// Check if the URL ends with a common image file extension
		const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
		for (const ext of imageExtensions) {
			if (url.pathname.toLowerCase().endsWith(ext)) {
			return true;
			}
		}

		return false; // If it's a valid URL but not an image
	} catch (error) {
		return false; // Invalid URL
	}
}

function areAllValuesFalse(obj) {
	for (let key in obj) {
		if (obj[key] !== false) {
			return false;
		}
	}
	return true;
}
  

export {object_to_urlsearchparams, get_form_object, form_to_obj, is_valid_img_link, areAllValuesFalse};