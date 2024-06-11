import React from 'react';
import './AI.css';
import "../App.css";
import { useNavigate } from 'react-router-dom';

const AIApplications = () => {
    const navigate=useNavigate();
  return (
    <div className="ai-applications">
      <h1 className="ai-title">AI Applications</h1>

      <div className="ai-section">
        <div className="ai-section-content">
          <h2>Overview</h2>
          <p>
            Artificial Intelligence (AI) is revolutionizing numerous industries by providing intelligent solutions to complex problems.
            From automating mundane tasks to enhancing decision-making processes, AI's impact is widespread and profound.
            This section explores some of the key areas where AI is making a significant difference.
          </p>
        </div>
        <div className="ai-section-image">
          <img src="https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg" alt="AI Overview" />
        </div>
      </div>

      <div className="ai-section">
        <div className="ai-section-content">
          <h2>Machine Learning</h2>
          <p>
            Machine Learning (ML) is a branch of AI that focuses on the development of algorithms that allow computers to learn from and make predictions based on data.
            ML is used in various applications such as recommendation systems, fraud detection, and predictive analytics. By analyzing large datasets,
            ML models can identify patterns and make accurate predictions, driving innovation in many fields.
          </p>
        </div>
        <div className="ai-section-image">
          <img src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/04/machine-learning.jpg" alt="Machine Learning" />
        </div>
      </div>

      <div className="ai-section">
        <div className="ai-section-content">
          <h2>Natural Language Processing</h2>
          <p>
            Natural Language Processing (NLP) is a field of AI that enables machines to understand and interpret human language.
            NLP applications include chatbots, sentiment analysis, and language translation services. By leveraging NLP, businesses can improve customer interactions,
            automate support tasks, and gain insights from large volumes of textual data, making communication more efficient and effective.
          </p>
        </div>
        <div className="ai-section-image">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAACtCAMAAAAu7/J6AAAAzFBMVEX///8lXaHT5fz7+/uw0fu31fvl8P73+/+82Pvh7f2z0fXY6PxhjsUiW6Ds9P7P4/xLfLi8yNwIU5zr8/6awO/x9/4AT5qCo8pwms6Oue2Vve7J4Pzj7v0qYaTL4fwaV55giLpDdbMxZaVOerFpj77c5fCixfDE3//R2+l6ncYATJmTqsx1lL/I1OW/1/RBc7KvwdmkuNR9o9K+zeFYgraasM+KpMiUt+NYhr+mwOAARJOzyeWdut6LsN2Gq9p3ns94p+CDsOhol9JQgsBUMA3sAAAgAElEQVR4nO2dC2OayhKAER+ouGgwqKnBRR4+IgSNqMlJk7Q9//8/3ZldQECMJDFtz22n5+ShhsfnzOzM7OwqlP/KSRHKAhOpW/srGVE4GiGEpEyrlb9yIFWxvIckVuqyJv2VjCjtSlWJIImVtvBX8kSrVzUOSfnL6KiUq3UOaVr/1ZfyG0utco2QpErjV1/J7yz1IULqVrRffSG/s7TrCKlWkX71hfzOIlf/QjopfyFph5J9yR8Pqds4lFrmNX86pHIOo0YjQ+P/FZKkKOVCr8uFlDG4/09I5Xa1Wq2LBV6ZD+lP0KRyvcpkWOCl3bTU/hhIYrUqSxJ+PfFCTVEyA5sk/SGQpDqn066eyEiv89yR9mdA0qpV5nmVaj26LalRFgVZ02TpOvG6XH8k/BmQpCqrkwndPSStJjSEmiTVgFb8unxI5T8DUrleH+H3aT323JIiML+sCd396xiksJb9GZBq7aGonH7ZL5JGtT6tXU/r1Th07orl4WgEFy2N9nfKIIUl6+vzQxpW6/V69fctZopVCALqycGtLKFWdUUhcaOfa26MEVAqEq39GqkNweQSql5rlzkkaZivSWz4V0JI15mjvQdSlzOq16v/nVKdxCAph5pUy0aS5e6BH3kPJLEeQfrPFH0VuTwURbEtSmJGkw5DgEN5D6RhBKl+KqL9bQRDAJRuORsCaImpbO2MkNr/PU3CEEAA96MchADn0iSxns4Ua+fySVKjPaqP5FqhosabBB33MMFDksttQVYUWUoo/zkhgZ/OqMw0ZDT62J3Iw+FwWp9Oh6Pu6Re/Sdq8CnDCG+QW3PKiv3dBggwSGQ0/FKZLbWDUULo1ZHVeu4VgcnhdSwaTRy5BCWPtuImkm2sbRcxNrmfDxrIMIf8Hb0wENNzOJHE6PSulMB8Z1gsUlLA0coLlr8vdrocJnwHKdMaQKyfBfeXFpxmdCxKLWt/if6XhMJk0tIdnjCZySiV4Rse7WC4Xm+XyYubsHwdIJ6/7Y5DKjrfq20ZgmSj+OLC3y1khL9ydpjxabfgxB5cSKQzg2tVpdLb13NKpCsK+qFS33KXD4EjZRC1HPgDJWQUmgROCkFDgR1UtmXABJ887TSV+oFhnKSqUmTpDfovl2zDD1ZYB6dH4CqMfVNV0PTz16aO+F5K2tKgK5yrlCFwAtZavOxkx4/dH05Oe4aRcj+rNZvO23S1PWSTHJgJmNoHrLAETavpWYIDej038jeB1+qsiN/4+SNpWx7McFzh/afsaJnEqZ37/KKRGM5bbaxlLJXAGz1BpCQjpQf9hJIoyC4VkWXz86vqgXiWimgUwvQvSSlcThPbqlNYsVV+9ct60p5ZGHzQ36bbSTIgoaUpZcGwVOZTsB1FmEn4DAVbiIxAkiOnUwd8BybESiACLqRPUKkJ0kFJCwYhqHfVN3ekoOagoH3TcUjMtlVt4cEURkf8VVCgWOSGNhueiz1Ct2etHfzukTdLOiOX2+/25oVMzcOf4owvePH6a0uWxuxqm7EscfqyAd9vMUpI1o0cQUVtst+H/PEqASewTJDl/9f7fCkmye7HboVR3AZAVwFe733cNy7IMIGXvMRF1e+zEyfix9sHBrZFl1Kw/67RE9a+jNhdG6fbxUZThiyyP8EuIyUaY5mvjcXFIZUnSJMXiboeWfMuw7XnfQEdErDmS4WLa/fk4HGjhlb15/uHAC8X11cbwY7FkuX7AaAAuQTVu2yOQiJPo9nRRnt9QUe7jlxDT9aOvwlv+mgMtCIkXgZ2OP/bNEjVRYebzed/lOkODvkFjLzUGZO58bnPD623yj6iNAE0XyNcg0xU/VC1RDhi1wIZKTwBomKTk/kPa8vwfFSD902vvjU7u98jRd1MoDInPk3eBEYhvgElZpk6DbRAalhnhYph8oGfb4K1sHaKR3jr/mJI4nA7hv+kH9QhuIgvpHhiZEywzDJOUHh8eRBG/yLcPD0nvdP0Ixqkax96pQpDKnJE21iH18O+3C5fZVkm39AiN5ScGf6ZYzPBcpKQf8zddcEzTaVv+aHLbPmRE/avm8DZkFGESQ8U5lIY4VkuqdeT4hSAxRIIQqKAlJWuxsP0SycRFqQiJ6HOXPWb0bXhcdY8eGf3cR/BwGR3YGh1fXU2GtyARJ3Ddtw9bO7CsIHC/PrazlGSjV1KD/OMXgRQymqsIQJ9vDVCn0uuihyrm9vGVvRNxyEdFTDG6AzcMjK6at7cxJTC1lzFPcXmGa1qL2wwmG3TJyD1+AUjos8Fa12zsp3Y/0MfjjvlaUsIVC6JLMDgLwiqaf+6zyXWCUXWHTvFqDwkwtYc7n6q9Hgw47nzrupap9lSVBA/pIBwo9XIjlgKQuB5p3KDM/hyuYXxSleBK2RAIERTwVD9XlVLxNpxO/46QYkajrz6lPXN+EZl2WXKWdqlHafCY0iXwJ7286Pc0JIk3Nrs4xBPVANUooSrpB6pEgiAZi2MgYPkWRk2E2p8CJ5a9U6riwPYNGU0iRo8WaJHhZe9QW457lLiijFH4dVeTyoLkgzfLGWUKQYInvR5z2qAcdqCjKplpQPjFNlLI5hYLKK3+3CTqyQLTh0SLHdITMLq/SijS8GuJ9oJQkxXn8fHrw6PHK5PltalS/5Y5Ey5dgJTjvE9D4tY2Jiz8mWOU3TdNsLek1gQW/GbadlK9SCkMNI1+QNTFmbFk5HpvbMS8Snik4R2lhJuQ9vg8aP340bkftFp3X2d4x9L2hupJV7C8KfUuDo5eBJJSFi5Akcw5+GxQjbFVMlNOieioQ2Rs236OOwdVMuDKP3mmQa7EI1vK2F5AV5gWd78OAM7g7vnl+W6AcrdGBVpDBuoljmNToh8evIgmCQJ4Q8pHKl4d6YzHiQgb8MA7GBiGlQMJNYmWjoXdZ5NupEjjq+/fYz16oaqFHrX8iFyeJk0+q9rcIag7pDcrpSh1ezl5VDFIbPifz2NrijQpytwMewyRoxUYGF6mQVFw4HNI944HlGcSSb5tPnGvPYlG/ydVDfDOus+twcuEzztP+fxz86k1aD3Cc45OScJjbkEXszCKQWIaMu9HkKIYQDdN9sW2jABsDoYyNmuSMjYDyygGDMs/oZdJCyjpgN3dguHd1m9vHwhlejQDtdlVkU9zsnt+3k2aSKr5Mmh9BZNzKB3vszYpJwwoNLo5GGtjGBll+mM2uqGZ6fjF1i2b+EDIZpL26bYJeM3PtzcQBZzCU1Q2AUg+NXFAd14GA1CjafOuU6JM9M5dEzA9DVo7AUduNVEB6FPiZ45bJJiUVux+YVgzdHbjYG1j9pCusy86ErLsEivgsscSlAimcBahx6pvZxQYXvR9VAlOW0Vv0wU9agKiQUmFQBuukWC8rb/Up/Vdq/UVXrHoJaJdB7xSJmApkpYI9z7L7G0IDFFJ9HEqTMJQXLfHLJSMSm0545v1+TPpc0qsuP5Wf+BlUelu8AKMdpC5EXvpaJBTQ7xNIH2bTKe7QQs13KLj/VHGBwHLUUiSUlPCB7uY0BK3bxL0RETHolLGPRPDsLNDW0wLINnks+NJkDLo612yGMDijge0tekzpWofbE9zvJkDfspxVUqepvXnwQCua9ZLREcrNWtvRyBJDbE9HIl8CtjDwUyHpA3vm9naWDczRmXZyco2T/MsPaFJJfXYnMDZRIOxbRdDeiA9rMg6Pwa7+hTCJXMmSOvNdjGf97ebtSTMTErvplUIDOBVtrpXpe5N6Sb9huZD0sR2W57CF9aGuUD7Gi/6bChDNeqYPisUJSClwm0LgyiIj8JYCiMsgPTJQTfqQ6m0V6QX1cSRbdcC57NTaaAJ3mK7nCkOyHK78ISuReluOmkNZvinCa/kk0zUnQ8JZ2EgLcY5BgGjUFSl/uJ+HIpJ0RVzOhEY29hTm/d9QnQc05iYLML67CQXcgqwk73f9plHclqDyXRC6Fgqr7ZrxdvaduBuZt1lfyVoJi01p3dMlazEAOdSNR1P5kKqjcQ2vgtKW8QZDeABfmiwmbMKN1geRj8WqwqY0XBPrL1LQh9kjt1+iI1A7IA+ffzZnnujkg4HNJk0v1KKuvGAitShuiOs5s5sPl87ENGs3bnjbJaCQ+g9qlIXHFEPsxHPxQm4hZoJfXMhiWKb98/U2qLMk1swtP7C9n3fRKsiPkTRlFA/1pa0zHEyJQhLvEHfZQ9+ejg5p7RVRUYDVW+CtUGEWL4b7MDYwB8uF86F4YVBY3ltrJ3+GtDQSf1lAIG3c4Pj/uqfGw2zXJKududCGo3CllFpNGozSHizJp9lY/k9uJm5bdj9fpCTreFIGPh6mOcZWCphP372ih2XkgFTpMENaVqssg7W1qx3qCU4fc8LEu7YMTyv7wgm7QyfWs+ATVfBzS9NHyB5N5nhLRdSWw6bJCX2kxVProF6gLHpEDjO5/DfPDftZ5BMPj1Z4tOW7NFPjwEMSl+aFUhLdi93TZP5lfXgpd6koEirlWI4guNxQVdtaJsVKk19MhiUcZbDZROw8Eezf0ipACSxzd91MDcxhoSl23BOsj83TAyv8/uT0FNbvmn6WKObW5Fz/+zpgD0k9EolFUeoh8Hz9FktKUrf2QA023JRbArv12Y162tOj+6agx/gXPq92MSKQWoAG3xAA+dUw5Pzu4QxDbIP3gZFwvA60p0kLXgdVrdZgdvag/wpmlSZVJqVCQhlY/pTazdtqYGw7jsGvO+GpzA9whKTY2h9TxjTQX3QmqHnNsHQ5n2JQSKnIUk4kdfoNsIQwI1nsHHEons2EFKyBjuIG/09JooFW39sWTAOJmfmzM923C6lAwBUaQ6IuaOoLQL67Q6M7qvlDF2U7aEuUYfV4ebOaglR5P10gJHS8kZHx90r7JNg7IfBH8MkFgks1OhGdRd0KW69ASc1dyHrZz03hs4rclQHPfKjJsqEfh3tLzmbQOrWQi1qtm5KED46OLiBJvkQxm6W6xWHBCnvmEPaePDYVvVHrZbHhrTIca9vyDh14CNpiQaEhnJbZg8ve/tbNZg74ndP0PbQfRuWD6OdMTZNcwxuyM2blCP003O3BcRJCKnyNHjhkASEZEJ6Ml8vtxEkjXBIi/US6KnmsNVimlRiZSF2vyQ9G3A0wdVqjVr44CwBiSAO17BCXaKmi0VdHMZs7ob6tpXrztXjTRvnEsxM0R1NwHnvKHOBT4NQk9brBYNkuCt/JXBI3nIDmjTm5ra6MaPjFAsmM6Kl5vlNHP373KBw/tGO+gJMcEMWd+l58umKJHg9Yk4iIayW9BVGtw4M7suVg2+SMfMWGxj1GCQ79EnguB2sKcHo5m23EqZharpZqVDDRKrUqMP4bgIK3cdWwLmVbJo40rPMNPDzy0mzEFJlUDInJrvRx9YdjG6W4PUxTBJAj0A2KzRFx8bRzaeD5qCFZDBO4hG3n+0WKgRpTpO3C/Hh3OUNkna2rnRc1CO9XGeUi9DcKq0emYzVPjw0aw2qTyrpav3ZCi7AW3DZwO1uIU6SME7aDe7glT5Okix1GIIltVipJCNrNXm7xAywkm1Ypn5ccw5V6fMdN/ikDjO159ag0mLdRtJgMGkSjLg3mpEKZj1bW6wgOiL1l9YDuJRez2ONWHyyOt3OVaw/KdPYfji+FxAanH+BZFr6lNxXQs89eeYTRV8Hd9MO9cuQzs6SlGb2bN1XJJ3eN5lLgmE/CuO2arYLplg7YG4a+5raRDCTDyZnaj7DQUk+oYPYcU9YxirMfgyaExV+XPdnnnERnldbGjNn7gmbHm0+MWsz9g1cY17STEgxSMlI6TQhLF92Op3xmNdV4sfjkFsZ1kfnD79x4uvLHtI9RXsr38H4do9atewDF3s5c7reyu47s+1SmKm01WRTAUov9tXOzUECVQySRo8zySIyERAg6vBv5t61RzG3hjPNBdbrvVEg4Pb3jCZPVMX79lrglXScgFv2l46zwurFynHgF0HRqd58HryAG9j29Oh6ICQdZ45csPvWLUiJ6CGcvYxjbYp8d7v6GcvlFYrWdnkZUxozVYJ48qU+oXTsCLNNf+U5TtdZL/uLmeBAgjWZDDAn0ei+AUAnB1MWBSE5vSyM3LGfmFlEKHHxMnSII9a0cO6NF1xKzMvLBKRnyu62Oxjc1Z8p1ddCebba9ueL7WI1KwsXkJrvKgM2O+mqsdte90pq1hUUbXa30qrUabXy6m0+p+KzCSfdNKPfo+e54V9XP2GfE3CbTJESnDpUxyo0GNzzdFeiqu3g5yA4Ds4nzowe1XdNAIgdajd7V+3ntOUVhbROqhIxWyCHeuT/y5DoezXTOab9dAELA2RwSWe2NgdXIlxGwiHtCG9bexwMnusTX6U02HiOojjewqKU+s3JYPACGLUSjQtu2MV1ENAVXlsST4aw1bYIKdtBEtqaSe8BYDT6Rw9G1Uk+oaV1z+22bdD0q8vLNKYB5WPF4w9svHk2sReA4spS+GY+1XeckWTRONCVSnlNQoUhzcKoW28l5T5hczrDcX8PD3Za9/fR9C135fFk7uekcDM0tsvLLKX7cAbNww6uevWpZYLVYZGwtWti582zAkGCoe4juK1K1MP5iuKrlGx6AhKLjTr3YxNnoPxO/BSDN4680mFH4jkE+2Uuv1weYBqHuuRApjJ4atbrzcnXr5Nmvbq7G7RwKkmQgFE8twzjU95Ec3FIDl8veRQSsyvdv6ehf9o/ZSaGOD7AXY+G8jlVSjIJGVx++XKA6dKnqstaSB9fWoPWy93TDuT5BZsDd2hjzlhNlEzHhJg5h3/DosCtmgMpzuoIumif3kdeirTilgr2VKhKBPukMVCq1s84vClwaVdfuGQo/UvDRa6St8POUmwvbf0Y3D2wB9dmsna06ZV6Xs7h3wBJYt43A8mPoDCjKt23Ymidlp4yuPC3GyfaWqjARiLRmbVag6/fO7Jcx+mRGNKXjDK1KCUL/meK9/D0/Hz3/PXRYe+Q46oq2ZeOwLHlrxV6y/JSj4UBnc6/KU7mfhTzyR4MqFI89JFxaG+EOdJok6piBqfIo1G7UesqSrfbkNsjOWcPaQ0Off/lSx6myeQFtMXcxO64HP25MyeqmpjVRZvN76R+0xrcPhocDKEpSB0Sm5QJ6hNPpcTjW+iVxrhXgI3VinC7s2oR7W2MxHS4ICny8HCBXB9XJv34lstpctmCU+v9deKvcHEJRAJmMgFx1WNrYAomuArreitj60QYJcUSBopjZlH0Poob9WSwqbNU117xt63BzW366inZrYijWt6FKe3stlSKictoqf89X5me7kmv1ysF/dXF2lsvN3NcbtIzN0nY3s3RFqpCEwFD3K8Bt/rEYClFqHXfCTkwl4SDGiXZ0Y0/68eDP98lo3pq45eyfHyHLk1up7XJYRshUPPqiM09bCzSAzC93g1+UXu6sUofISDkAysnu6F14HC0ULMhAMlAamGmBh7qPgmJIKS9h5TEaf3UGnepMcQ9MZXl3HX7y8MXa+3M4mbPhaSAtvI902VTKDtLN8Cs0jQtY77O8ld6x5sVCvRxxxsm1suYnXA64046TtKxgMR99H1Lv4fnE3rEPLeftP/yCX8kyUPs19QWwWbmOLON4R7eQO2A80Il5pe9LiU5VcLjagpfUHQgq15uiMTkNCQx2guQlYBmNIyPSplgkmsS8+sdVDA2550yt9cXTkiJa1fAF+H3mbWMtGVmuwe2J7Uz5RbwBjpbonRIaYLPLw0ILC8MuJC1YWecv0GPd5qfhjTdaxJGNv0Qjp6BNN4naKH2lMxkoLRrvdbpNtsagRHYuJ8QDmhcRZbJrithbR227zbSu5wpcL7vSUqXzz8GYdqLtBc9uIYNTvqv9nX/UEw+m/lOSPWEwK8aLzeSEi8VxbHjuJOorjHPDdHtfZj9Qwgw2O3EYydx3MDDD5pzNoEotq/5y7S5m3695M4PIiRtyjfzRT0sYw5PGKQvIaZ/KaWlbwwSayPGhtwNdkeueqU0JK1H1KPDxJsgsUF70ePTSelpJZ6VJL0QW1TGcxP2pG6ORqPsJ4Iw8cbsPYQISBQfIjKzHMVZGQd/XhZlzdu6RhAExnwJ4SBb7RZqUwt3kiIEdOnLl66kSVvV7Er5kGY3mcatt0Fq7yHx3b94A2TMKNz9S++k7Y0xGrxwVWPPQTSrNUZDsaGkt8jzILfSahBXs7CRg5AWQd5c5to6GOac58nAwyxDc2ZbgPTjyx6SSfyrbxD7Xl76OlbBQK/xSx4k7+a43y6ylGvvuPlxbQp6YjDB5pKA/8gmSfYlXZNDGrRIlOCGbSWS0hBxKwPcFev6GrfF2t22GbkIRKAJF9aR7VVmGUqOa6wlObZjl0J2EqvSlU7vL7/o5N/LS74lAOgVfsuDtO4djZIKxUlyNb0d8AqCW8PysV15jitv8Sc/sMykKhE9hISenZdKzL4bK0cZhuJu7Roo1a7vnczei+vAnR8NolKUpC1fgVybssKL5vqEdPaMvsB7BlkTVuN+tBabzSYgOnxbzFi+n9bU2cc0CcYQ9oEy9WhTqDVCYgMXdYEAa2knY4u57nHsk1rc3FC32BPqUvAC99CG3KzrmbnBkd0wQkra/sdY3xpDGcx2jWsCEpC+gRsg1MdhjoUAGzVMYOe44Usq8prdlOjRcxbK3aRrWd4nUUlIOvVjSGayAhnaGygSr+oSNgXhGfZFWs036eBEWxqQA69ea/haB+GVpCOE68muzTqUrpKUfDg9DnRXDNKCLzfBAABbPZNX0r3J3RGAyzv2dFvGkIhlW65ZCiGVopo/T950iClxiQkrcZtWaCbONnAT6bhnJA6sefNgwW58+1p/5QXfwmfrJq1UcrcQYA0hyP2epHT1nSH6ctXEF0WQTGopSzW1ilSir2yD8Q5IqxgSuGSLR0IAie6nlMI1JbgfXjilRF0vCrilWT+wN2s2xDlByEvSvI0b9GexB36tm2mFbeluKmNXAnbHUioGSIqYgFTG4Foi6XY2K/P7ByG5lEEKx/8oLDKwETCc4/b5ElM9mpwcg84J88Q1OBcQYdvuwpwvl6vVdg5xzvzCSWqG/drquIUrpRk5Fo+WyxbEAFffs4RgwGNvRqRJFjVXLk23s23V48PbOyCBLyZBZj1yyQwC7Cj14w6A8b4pAMsCVBOCdI9dWZv5K2C0XPK1jGmRgtcWNm/MFCMv3qpxTsm/V9+/H2Bi1hZD8m6oSjNbSkEMkM1UYnk7pC4LtyE2c9Nr2ym19z0lcVcJFtsQproWJCs9naQZr2mL9trmj57vJm4oEWJCLu8jpCwmnnFEkIQLn+g2u+ValCRL6tF91d4BaclruIQa46Qq4TpcRs1M9ZVEK5pxbkszklbvWK8vgneO7+SpWJq3/+tlkBgI1JL+nUvC6r7f8me3/9DIBzqIrduVh1Jb7LIAEALRD21XlhK2OQA2Q2Q0iRCb/4ArCLki4U6CIUgeb8/teD55dZxBKEcplQ3slnFt5ua1rZ3wZTgj8O17hCltbAIuUkpvkyojKk3ERX0YKR0b394Mic1REsO2jRyfFPPiWwYkEuBwltTDAEDTnIW1OH3G2Tj/osMhAKJOd2tn8mAjdEohpe/f7jv+y5FmzRqw0a67WDPHX/P6Sbi8GRJbaBKPbrEesdGtdFT2OwTO+lZg2Sc2og7FyakEAKM4iJKcmZMBgI2LEASEiO5N3H873PcG88bUaUGPGg2tJgrsI4TwT48spCoISYqel3gUaWQ24mJxUvyLiVuZJyHS0tGC1uun3RrZy84M/lnRcM/Gf5nFffsXbR23VMcluAJ319v9jdamgobeCL7ILIwyCc33SkUg4WdL1MPPg+ArlvIg7ZdyudoM4iCcZ1Mp30Q9t+5RSGbWIpUteLnKlZAl5vo4+LJNDNSSsdnohOKodvEPDPw9I37lUBJ4eQsITfGH9U3+lm6FtuEI90mfSvEyk1chhSOp5DjrjT02Tav/oSWTy8CNAvGyZx9olsB35RUU/BQgtL2Zybwmmy422UyfU8JurrJJzJVB91Mioih0MWmXZFAqZrVB/pZuRSDF5aRh3GAa5W6RnyYJSISmDP8Mm23OIENcrFYLcNS5uNuNxqhclYZdbjUwcDIlNo1leG4IDNSVhN3cmppIPkaSIGoCfk5X2JbgqLxjNyunITX2RbeuF3ZyEWPM6knsF9bxtt8WgPjn7/yXHG+5Ws+OXCT7OBD2L3qBM/O8ZBS/6BE606mhQVq7p9AFprIsS+HoBrLyc/3C22ZLzH2qhoKREmQovDIZW5712csjsjJsXLPL6zaOfbiThLs4LnpMv/Z3ei1yNVdqUYPLkenAN00ENOOFOITt1WQxSCb7OeGefjYkRWpMu7XutCYdL2jC8H7hqqqaKrWJ+JkytWF7eOKK3wYp3aeMjgji7IP46PNXtqWloTAVGta6x1t6sctbmK3W2WsTR6f7NgpA2n8uYH2XWRdADCM42Dbp89f/Z0XuRpCON9A7lOSvuJMKvKWnIcUfeVef3md5QDxyuL3r5+8BlBENzE1RFDC3V+L4rUrevVlKgRBgFFKaPh0uMMldO/EzNgJMCjruKvyDnP74i7QP7OBUJOJmC2ZyGeXL5+8AkBYJP8EV/r3eq7LpkdI7371CuZsiDidPHfU0nlB+xnaJIN3w4/2Gojis1WtDuT3s1vJF46pUZB2w1JCz7XVFl3L1Xv3opKzBkZ/iu+V2YcG60UYtsgOvzOYYu5nHinyQQvCWlZNIib4v63+byPxjbdriSWGQCqmSXGlLZWWaXkNVBJIyvlHfKv9sPz9aql2zf7WCkFgj3ImwUeKfyFpON5kXgeRdvEOWn69LtcZ1A/8rCklTSX4pJHHIClchuZqk+cs+mPMMIhcwtCQktqPp64eMQDQq/zeQijKKIOEipNcVXAtbZ6b11In+JEhC0DsVUA7Zp8PKlVQW+CFIif1xf4W8HZK3PbVDoVSvDsVpJf3pyB+AhNLJpC0AAAIMSURBVA05otzYf/y4cv0JH0X+irwdUgHBgn7Yrbo/0bshSQ0ITWUAFWqmNsUo7Nyr/V+TT4GUe6J3Q2rIbI9lrcGmQaOFA2ffE+EV+f0hSXK4QLTLVakdVVR+npN6Y1rygRO9F5ISmVm5gRpVjmcLPv6hv0Ulyma7JyV3QVhxeTekrhzRkHGNXrxM52faWyjSxyWZqh0u0Hk3JE2OGnu43UWTKieXsZ1fxOJmd0z20yxKvVKpjtI4PuKTwv1xGw1+oMTSip8rxR34cc8eHasLA3QX7iUVy7x/dOvKclcSpJocrogdcko/uXSLwiDxj90uku2+Com/yUo1FU1+IJis4Udcwn+RfeE2LaNfEYDHkOBqPgipW+F3066mTvCBtERhn46aXCP9s6cluZzR3K7jKkASyMcSXKnIrNWnyxkhxZr0f1MFiOScjpstfDyjT/pt5Oyjm3i20e33kXNCEpRptVLNdFD8hZSBdNaI+zeSM0PKOcFfSH8GpDPkbgUgCf9tSEpX+ai8npXLLP7+b0P6dPkLqYD8hVRA/kIqIBzS9V9IrwmH1K38glrZf0dElvVKletTL/yTJexW+hWl6f+MaGH7xHXl588E/WdkGtVyh38pHZMhr1Zi9WRaObWp4R8pUqPO1Kcs8D3pq5XqXzmQSp3pTghJKNfOUHP4f5Nom90I0l95RQDSXzkp/wMbmFqDh+6w1AAAAABJRU5ErkJggg==" alt="Natural Language Processing" />
        </div>
      </div>
      <div className="contact-container">
        <h1>Let's build your first customized appliaction with 🆆🅴🅱🆇</h1>
        <button id='create-btn' onClick={()=>navigate("/form")}>Create Now</button>
      </div>
    </div>
  );
};

export default AIApplications;