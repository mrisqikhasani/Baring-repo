import "./movieItem.scss";

export default function MovieItem() {
  const truncateTitle = (title: string, maxLength: number = 20): string => {
    if (title.length <= maxLength) {
      return title;
    } else {
      return title.substring(0, maxLength) + "...";
    }
  };
  return (
    <div className="box-item">
      <div className="poster">
        <div className="overplap-poster">
          <img
            src="https://s3-alpha-sig.figma.com/img/d258/bf36/eff5de49a36237f98cfa0118a1b5332a?Expires=1692576000&Signature=jaXqeBGYeHQ-EeEBYqDoZBjfzOTsg8WAhK1yh0KlOZbKE61NOHVZaGkyHRc~GT-X0fUcSutKvnBawYzO8wxUFH02cgyI-ZtQOt7rZFQCopNjmwfcs7YCGu6SvOFdytpHHWkoNBo724m2sgXjb3i4Bc5pk7WgJavf644dfKVhk2tNaazHKnucqO0sasjR8B4VZEAITjlkpOXvIRso5UiOno7o6yojzLyjd784HxjfrwL4e3VuS0vSo-59Ridt4JyvMNI3IXNUoaCTBp~8bt2a9fLGnrhqwpqoxNIr~lOItBMXB-kv28EoEt-dzrKlXFL9gjNYd7CNRRHltNEAVS29pw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="poster alt"
          />
          <div className="badge">
            <div className="overplap-badge">
              <span className="text-wrap">Movies</span>
            </div>
          </div>
        </div>
        <div className="title-poster">
          <h3>
            {truncateTitle(`
            Mavka: The Forest Song apa pun itu telah mencoba hal yang telah
            disampaikan oleh mrek`, 60)}
          </h3>
          <p>2023</p>
        </div>
      </div>
    </div>
  );
}
