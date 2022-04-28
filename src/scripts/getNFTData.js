const axios = require("axios").default;
const APIKeyId = "4MwaGoAInBf3ZIl";
const APISecretKey = "x3J5WD24wJcY3Zc";
const tokenAddress = "9A3EwmhBQ7WwzG6MARPURXpw9Bzs5ufN5UzkV9u3vPtu";

// getCollection
const getCollectionInfo = async () => {
  const url =
    "https://api.blockchainapi.com/third-party-apis/TycKOmRKGuAtN5Nn8YYR/v1.0.7/get_collection_info";
  const headers = {
    APIKeyId: APIKeyId,
    APISecretKey: APISecretKey,
  };
  const response = await axios.post(
    url,
    {
      token_address: tokenAddress,
    },
    {
      headers,
    }
  );
  console.log(response.data, response.status);
};

// getAttributes
const getAttributeInfo = async () => {
  const url =
    "https://api.blockchainapi.com/third-party-apis/TycKOmRKGuAtN5Nn8YYR/v1.0.7/get_nft_attributes";
  const headers = {
    APIKeyId: APIKeyId,
    APISecretKey: APISecretKey,
  };
  const response = await axios.post(
    url,
    {
      token_address: tokenAddress,
    },
    {
      headers,
    }
  );
  console.log(response.data, response.status);
};

// getImage
const getNFTImage = async () => {
  const url =
    "https://api.blockchainapi.com/third-party-apis/TycKOmRKGuAtN5Nn8YYR/v1.0.7/get_nft_image";
  const headers = {
    APIKeyId: APIKeyId,
    APISecretKey: APISecretKey,
  };
  const response = await axios.post(
    url,
    {
      token_address: tokenAddress,
    },
    {
      headers,
    }
  );
  console.log(response.data, response.status);
};

getCollectionInfo();
getAttributeInfo();
getNFTImage();
