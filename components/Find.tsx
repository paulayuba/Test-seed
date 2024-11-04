import React from 'react';

const Find = () => {
  return (
    <div className="p-4 sm:p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Shop Smarter, Live Better!</h2>
        <p className="text-base sm:text-lg text-gray-600">Find What You Love</p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap gap-6">
        {/* First Card */}
        <div className="w-full md:w-1/2 p-4">
          <img
            className="w-full h-48 sm:h-64 object-cover mb-4"
            src="https://s3-alpha-sig.figma.com/img/de32/c338/bd972c2404a89390640d83a4c7d34a0f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C-uHoexxGMhTBAngg8fsLz81hsSArm6Sn-JCGYvEUBf4p7sXDpA8qs3Uw15QxdFgTPtYPGcBwiAKL3aUjv5MzrAv6XMrZY1xwbQPyM-YYcFioakuXC~fBEbNkeR-g3yyEZM4Ig37hgrJocA8Vsfa9EDL9Enq72YdGU5I1DGxtp~Q2pbF4YVfREicNBN9UBQh-SxzfE15JXJylpUFsD4kPgN6nK0F1FPAbD2HDqUZTJ6qToyb1yYVkWBEJuf8T1XYvhzXclI-ioDp5Cl0w2xe7VeNNlky-swDswawrkj6dcJwNeTEnOKaRuzMvCLVG0~xjxMcxSEChBsAg13kB~2Zfg__"
            alt="Electronics on Sale"
          />
          <h2 className="text-xl font-semibold mb-2">Electronics on Sale</h2>
          <p className="text-gray-600">Discounts, New Releases</p>
        </div>

        {/* Second Card */}
        <div className="w-full md:w-1/3 p-4">
          <img
            className="w-full h-48 sm:h-64 object-cover mb-4"
            src="https://s3-alpha-sig.figma.com/img/2195/1cb5/849c4431952ef4f5aa6c796b0e82744c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ixhy2Liepuc2KxK3rv1g9n9Sw6kGR7Uh1g1sTOKP1CAjbwWuADJ-giEICcGMShzK5eWhGKTr2RIkaX-bu0jCe9nNX5JQbuCIWXBBhOByITLaV3bZA0aBAQU559~QTQGAu1ZIfINqE1ds9-DH-oXVGnq6FiftQZlHELcNYYadF7iiI8slx3GF5n3OGttFSTKjr9yFCwUJLQvKAp5P8GcLT4quHt9d-f2f3kXId0xQBX6LQe1c5KcrI64uz~iup3V31qvFR4BLrqM1lKB3sRoLXJVS1Z-7NcRV2YAWcpMPAzaYzsjzGV7GXccZ8b2MoHvUOJcfl54ppRViSoaaI3r-Sw__"
            alt="Fashion for Everyone"
          />
          <h3 className="text-lg font-semibold mb-2">Fashion for Everyone</h3>
          <p className="text-gray-600">Men's, Women's, Kids'</p>
        </div>
      </div>

      {/* Additional Cards */}
      <div className="flex px-52 gap-6 mt-6">
        {/* Third Card */}
        <div className="w-full md:w-1/2 p-4">
          <img
            className="w-[400px] h-48 sm:h-64 object-cover mb-4"
            src="https://s3-alpha-sig.figma.com/img/3d4e/67d8/3e783f0c0902b46c7fee3503122ed8d7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eCT7o27fxLThmzM7bVjS24ao4NWKyfORAMpAbBUtElgcu7OapDT9h0Wdyzt~8cPxZqNAGK-aLsy6L2dLtqDwZf3kPE9qnT2wndIwdQTwqm71BcV6kBR1maVO1vEEq5xH2j~I4L1diOzeOcmddPdBDy4-fRLrWleV-e0yBgx9tlc9PCGOi8AkRR1av93tMPT5LQfjGK72~nVTp~sWtCk1bE5IVGcKp~RCoYY~XEamcHNtZhRbs-g1hQDjOQm5iNRDs~LX7lg6pq03ajN5MQ1xogKtRoTpB-w8OJiIQbQFDuHmSv9-aJOiF5M-7gM9j2w69xTbZfj-GmZr9jq~QzwSqA__"
            alt="Home Essentials Deals"
          />
          <h1 className="text-xl font-semibold mb-2">Home Essentials Deals</h1>
          <p className="text-gray-600">Stylish, Affordable Items</p>
        </div>

        {/* Fourth Card */}
        <div className="w-full md:w-1/2 p-4">
          <img
            className="w-[400px] h-48 sm:h-64 object-cover mb-4"
            src="https://s3-alpha-sig.figma.com/img/09d4/eda3/77934e30079a513c2cca07a9128de09f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eKPFmvzWm-r-1lCUyERTJRvMIusjWtvSw9xG0118tohvZoLEEWsov7g6y~proyqj05RNg0eQNpOtIaN7B6D8r1qwSpC0neXv2ncNoA6g3rvJGfm8WujlieWSHgQ7itQubN8szGo3TcZ3Y0QW1YB8GciGEzPzxJ3YdPeoyuA4s2lzIAlhDqqjQc5zbUSxOyKUIx7xT9yCxnbRDxtRtc3QJbk5FPfJrecciD0cRYHeLOyhA1mndGOMTmLIDPGIpaWe4Zo8LsBwiRJ4GUN-IfprHnw-7QB0Y7AaZGnln51iFWTuU8cUA40FS9H0M4HiRM-DpwqB6w3naej6z0gUxKugMg__"
            alt="Beauty & Personal Care"
          />
          <h1 className="text-xl font-semibold mb-2">Beauty & Personal Care</h1>
          <p className="text-gray-600">Skincare, Makeup, More</p>
        </div>
      </div>
    </div>
  );
};

export default Find;
